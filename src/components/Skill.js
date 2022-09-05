import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from '../assets/images/meter1.svg';
import meter2 from '../assets/images/meter2.svg';
import meter3 from '../assets/images/meter3.svg';
import colorSharp from '../assets/images/color-sharp.png';

export const Skill = () => {
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

return (
    <section className='skill' id='skills'>
     <Container>
        <Row>
       <Col>
          <div className='skill-bx'>
            <h2>
                skills
            </h2>
            <p>
             I have very strong and technical skill set in various programming languages 
            </p>
            <Carousel responsive={responsive} infinite={true} className="skill-slider">
               <div>
                <img src={meter1} alt=""/>
                <h5>Web Development</h5>
                </div>
                <div>
                <img src={meter2} alt=""/>
                <h5>Brand Identity</h5>
                </div>
                <div>
                <img src={meter3} alt=""/>
                <h5>Web Design</h5>
                </div>
                <div>
                <img src={meter1} alt=""/>
                <h5>Web Development</h5>
                </div> 
            </Carousel>
          </div>
       </Col>
        </Row>
     </Container>
     <img className='background-image-left' src={colorSharp}/>
    </section>
)
}
