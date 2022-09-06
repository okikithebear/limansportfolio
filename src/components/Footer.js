import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { MailChimpForm } from './MailChimpForm';
import logo from '../assets/images/logo.svg';
import navIcon1 from '../assets/images/nav-icon1.svg';
import navIcon2 from '../assets/images/nav-icon2.svg';
import navIcon3 from '../assets/images/nav-icon3.svg';

export const Footer = () => {
  return (
    <footer className='footer' id='footer'>
        <Container>
            <Row className="align-item-center">
             <MailChimpForm/>
             <Col sm={6}>
                <img src={logo} alt="logo"/>
             </Col>
             <Col sm={6} className='text-center text-sm-end'>
               <div className='social-icon'>
                <a href=""><img src={navIcon1}/></a>
                <a href=""><img src={navIcon3}/></a>
               </div>
            <p>CopyRight &copy; 2022. All Rights Reserved by The Hashira</p>
             </Col>
            </Row>
        </Container>
    </footer>
  )
}
