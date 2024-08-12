import "./Contact.css";

import { Form, Button, Container, Row, Col } from 'react-bootstrap';


const Contact = () => {
  return (
    <div className="bg-body-dark" id="contact">
    <div className="container">
      <h1 className="container my-5 display-5 fw-bold lh-1 ">Contact</h1>
      <Container>
        <Form
          action="https://formsubmit.co/14093ef5aae773c8bf33981c823370ba" 
          method="POST"
          target="_blank"
        >
          <Form.Group className="mb-3" controlId="formName">
            <Row>
              {/* Each Col will take the full width on small screens and half the width on medium and larger screens */}
              <Col xs={12} md={6} className="mb-3">
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                />
              </Col>
              <Col xs={12} md={6} className="mb-3">
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                />
              </Col>
            </Row>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formMessage">
            <Form.Control
              as="textarea"
              name="message"
              placeholder="Your Message"
              rows={10}
              required
            />
          </Form.Group>

          <input type="hidden" name="_next" value="https://jamie-buick.netlify.app/"></input>
          <input type="hidden" name="_autoresponse" value="Thank you for your message, I will be in contact soon!"></input>

          <Row className="justify-content-center">
            <Col xs="auto">
              <Button className="btn-primary my-3 align-items-center" type="submit" variant="dark" size="lg" block>
                Submit Form
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  </div>
  )
}

export default Contact