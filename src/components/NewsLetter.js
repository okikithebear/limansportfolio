
import React, {useState, useEffect} from 'react';
import { Alert } from 'react-bootstrap';
import {  Row, Col } from 'react-bootstrap';

export const NewsLetter = ({onValidated, status, message}) => {
useEffect(() =>{
if(status === 'success') clearFields();
}, [status])


    const [email, setEmail] = useState('');
const handleSubmit =(e)=>{
    e.preventDeafult();
    email.indexOf("@") > -1 &&
    onValidated({
        EMAIL: email
    })
}

const clearFields = () => {
    setEmail('');
}

  return (
    <Col lg={12}>
      <div className='newsletter-bx'>
       <Row>
        <Col lg={12} md={6} xl={5}>
            <h3>Subscribe to our NewsLetter</h3>
            {status === 'sending' && <Alert>Sending...</Alert>}
            {status === 'error' && <Alert variant="danger">{message}</Alert>}
            {status === 'success' && <Alert variant="success">{message}</Alert>}
        </Col>
        <Col md={6} xl={7}>
            <form onSubmit={handleSubmit}>
              <div className='new-email-bx'>
                <input value={email} type='email' onChange={(e) => setEmail(e.target.value)} placeholder="Email Please"/>
                <button type="submit">submit</button>
              </div>
            </form>
        </Col>
       </Row>

      </div>
    </Col>
  )
}
