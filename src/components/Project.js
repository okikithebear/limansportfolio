import { ProjectCard } from './ProjectCard';
import projImg1 from "../assets/images/project-img1.png";
import projImg2 from "../assets/images/project-img2.png";
import projImg3 from "../assets/images/project-img3.png";
import {Col, Tab, Container,  Row, Nav} from 'react-bootstrap';
import colorSharp2 from '../assets/images/color-sharp2.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import React from 'react'

export const Projects = () => {
  const projects = [
    {
        title: "Business Startup",
        description: "Design & Development",
        imgUrl: projImg1,
      },
      {
        title: "Business Startup",
        description: "Design & Development",
        imgUrl: projImg2,
      },
      {
        title: "Business Startup",
        description: "Design & Development",
        imgUrl: projImg3,
      },
      {
        title: "Business Startup",
        description: "Design & Development",
        imgUrl: projImg1,
      },
      {
        title: "Business Startup",
        description: "Design & Development",
        imgUrl: projImg2,
      },
      {
        title: "Business Startup",
        description: "Design & Development",
        imgUrl: projImg3,
      },
  ];

    return (
    <section className='project' id='project'>
        <Container>
            <Row>
                <Col>
                <TrackVisibility>
                {({ isVisible }) => 
                <div className={isVisible ? "animate__animated animate__bounce": ""}>
                <h2>
                    Projects
                </h2>
                <p>This are ideas that i have that i have built on, i believe it shows my current skill set and capabilities </p>
                 <Tab.Container id="project-tabs" defaultActiveKey='frst'>
                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="third"> Tab 3
                        </Nav.Link>
                    </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                                return (
                                    <ProjectCard key={index}
                                    {...project}/>
                            )
                            })
                          }  
                        </Row>
                    </Tab.Pane> 
                    <Tab.Pane eventKey="second">Lorem Ipsum</Tab.Pane>
                    <Tab.Pane eventKey="third">Lorem Ipsum</Tab.Pane>
                    </Tab.Content>
                    </Tab.Container>
                    </div>}
            </TrackVisibility>
                </Col>
            </Row>
        </Container>
        <img className='background-image-right' src={colorSharp2}/>
    </section>
  )
}
