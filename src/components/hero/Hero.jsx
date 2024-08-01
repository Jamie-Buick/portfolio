import React from 'react';
import "./Hero.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';


const Hero = () => {
  return (
    <Container className="px-4 py-5">
    <Row className="flex-lg-row-reverse align-items-center g-5 py-5">
      <Col xs={12} lg={6} className="text-center text-lg-start">
        <Image
          src="src/assets/images/1674040510668 (1).jpeg"
          roundedCircle
          className="d-block mx-auto img-fluid"
          alt="Profile"
          width={450}
          height={450}
          loading="lazy"
        />
      </Col>
      <Col xs={12} lg={6} className="text-center text-lg-start">
        <h1 className="py-3 display-5 fw-bold lh-1 mb-3">
          Welcome.
        </h1>
        <p className="lead">
          I am a Control Systems Software Engineer with a background in the off-road vehicle industry,
          now expanding into full-stack web development with React and Node.js. Explore my portfolio to
          view my projects and connect for opportunities.
        </p>
        <div className="d-grid gap-2 d-md-flex justify-content-center justify-content-md-start py-3">
          <Button href="portfolio" variant="primary" size="lg" className="px-4 me-md-2">
            Portfolio
          </Button>
          <Button href="contact" variant="outline-secondary" size="lg" className="px-4">
            Contact Me
          </Button>
        </div>
      </Col>
    </Row>
  </Container>
  );

}

export default Hero