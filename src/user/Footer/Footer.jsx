import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <Container fluid className="p-0">
        {/* Footer */}
        <footer className="text-center text-white" style={{ backgroundColor: '#fba100' }}>
          <Container className="p-4 pb-0">
            {/* Section: CTA */}
            <Row className="justify-content-center align-items-center">
              <Col md="9" className="d-flex justify-content-center align-items-center">
                <span className="me-3 mt-3 mb-3">Register for free</span>
                <Link to={'/Register'}><Button variant="outline-light" className="btn-rounded">
                  Sign up!
                </Button></Link>
              </Col>
            </Row>
            {/* Section: CTA */}
          </Container>

          {/* Copyright */}
          <div className="text-center p-3  mt-3 mb-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
            © 2024 Copyright :
           &nbsp;&nbsp;&nbsp;&nbsp; 
           <a className="text-white mt-3 mb-3" href="https://mdbootstrap.com/">
              FoodAlix.com
            </a>
          </div>
          {/* Copyright */}
        </footer>
        {/* Footer */}
      </Container>
    </div>
  );
};

export default Footer;
