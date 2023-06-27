import { Container, Row, Col, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGem, faHome, faEnvelope, faPhone, faPrint } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faGoogle, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
const Footer=()=>{
return (
  <footer className=" text-center text-lg-start text-muted"  style={{backgroundColor:'#F1F1F1'}}>
    <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom" >
      <div className="me-5 d-none d-lg-block">
        <span>Get connected with us on social networks:</span>
      </div>

      <div>
        <Nav className="me-4 text-reset">
          <Nav.Link href="#">
            <FontAwesomeIcon icon={faFacebookF} color="#2fa9af" />
          </Nav.Link>
          <Nav.Link href="#">
            <FontAwesomeIcon icon={faTwitter} color="#2fa9af" />
          </Nav.Link>
          <Nav.Link href="#">
            <FontAwesomeIcon icon={faGoogle} color="#2fa9af" />
          </Nav.Link>
          <Nav.Link href="#">
            <FontAwesomeIcon icon={faInstagram} color="#2fa9af" />
          </Nav.Link> 
        </Nav>
      </div>
    </section>

    <section >
      <Container className="text-center text-md-start mt-5">
        <Row className="mt-3">
          <Col md={3} lg={4} xl={3} className="mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">
              <FontAwesomeIcon icon={faGem} color="secondary" className="me-3" />
              BARAN hotel
            </h6>
            <p>
              Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit.
            </p>
          </Col>

          <Col md={2} lg={2} xl={2} className="mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Location</h6>
            <Nav className="flex-column" >
              <Nav.Link href="#" className="text-reset" >
               Zürich
              </Nav.Link>
              <Nav.Link href="#" className="text-reset" >
               Bern
              </Nav.Link>
              <Nav.Link href="#" className="text-reset">
                Luzern
              </Nav.Link>
              <Nav.Link href="#" className="text-reset">
               Genf
              </Nav.Link>
            </Nav>
          </Col>

          <Col md={3} lg={2} xl={2} className="mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
            <Nav className="flex-column">
              <Nav.Link href="#" className="text-reset">
                Pricing
              </Nav.Link>
              <Nav.Link href="#" className="text-reset">
                Settings
              </Nav.Link>
              <Nav.Link href="#" className="text-reset">
                Orders
              </Nav.Link>
              <Nav.Link href="#" className="text-reset">
                Help
              </Nav.Link>
            </Nav>
          </Col>

          <Col md={4} lg={3} xl={3} className="mx-auto mb-md-0 mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
            <p>
              <FontAwesomeIcon icon={faHome} color="secondary" className="me-2" />
              Zürich, 8004
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} color="secondary" className="me-3" />
              info@example.com
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} color="secondary" className="me-3" /> + 41 234 567 88
            </p>
            <p>
              <FontAwesomeIcon icon={faPrint} color="secondary" className="me-3" /> +41 234 567 89
            </p>
          </Col>
        </Row>
      </Container>
    </section>

    <div className="text-center p-4" style={{ backgroundColor: '#304146' }}>
      &copy; 2023 M.A  All rights reserved.
    </div>
  </footer>
);
}
export default Footer;
