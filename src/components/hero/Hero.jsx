import "./Hero.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import me from '../../assets/images/1674040510668 (1).jpeg'


const Hero = () => {
  return (
    <div className="bg-body-dark">
      <Container className="px-4 py-5">
      <Row className="flex-lg-row-reverse align-items-center g-5 py-5">
        <Col xs={12} lg={6} className="text-center text-lg-start">
          <Image
            src={me}
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
          <div className="d-grid gap-2 d-md-flex justify-content-center justify-content-lg-start py-3 mb-3">
            <Button href="portfolio" variant="primary" size="lg" className="px-4 me-md-2">
              Portfolio
            </Button>
          </div>
        
          <div className="d-flex ms-3 justify-content-center justify-content-lg-start">
              <a href="https://github.com/Jamie-Buick" target="_blank" className="nav-link custom-icon d-inline-block">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/jamie-buick-809912173/" target="_blank" className="nav-link custom-icon d-inline-block">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="mailto:jamiebuick28@gmail.com" target="_blank" className="nav-link custom-icon d-inline-block">
                <i className="fas fa-envelope"></i>
              </a>
          </div>
        </Col>
      </Row>
    </Container>
    </div>
  );

}

export default Hero