import React, {useState, useEffect} from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../assets/images/header-img.svg';
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Developer", "Web Designer", "Dev Ops"];
    const[text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() =>{
             tick();
        }, delta)
const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length -1) : fullText.substring(0, text.length + 1)
    
    setText(updatedText);

    if(isDeleting) {
      setDelta(prevDelta => prevDelta / 2)  
    }

    if(!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);
    } else if (isDeleting && updatedText === ''){
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          setDelta(500);
    }
}


        return () => { clearInterval(ticker)};
        // eslint-disable-next-line
    }, [text])


    return (
    <section className='banner' id='home'>
        <Container>
            <Row className='align-items-center'>
             <Col xs={12} md={6} xl={7}>
                <TrackVisibility>
                {({ isVisible }) => 
                <div className={isVisible ? "animated__animated animate__fadeIn": ""}>
                <span className='tagline'>Welcome to my Portfolio</span>
                <h1>{`Hi I'm okikithebear`} <span className='wrap'>{text}</span></h1>
                <p>I'm an aspiring full stack developer, i believe technology in it's totality create unimaginable things. I will like to build and create, applications that impact the world, africa especially. Follow me on this journey of greatness!</p>
                 <button onClick={() => console.log('connect')}>Let's Connect <ArrowRightCircle size={25}/></button> 
                 </div> }
                 </TrackVisibility> 
             </Col> 
             <Col xs={12} md={6} xl={5}>
                <img src={headerImg} alt='Haeder img'/>
             </Col>
            </Row>
        </Container>
    </section>
  )
}
