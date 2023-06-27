
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';


function Location() {
  return (
    <>
    <div  className="d-flex justify-content-center"><h1>Location</h1></div>
    <br />
    <Container > 
    <CardGroup>
      <Row>
      <Col sm={3}>
      <Card>
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1606566557322-97078d552c65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGx1emVybnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" />
        <Card.Body>
          <Card.Title>Luzern</Card.Title>
        </Card.Body>
      </Card>
      </Col>
      <Col sm={3}>
      <Card>
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1683377117023-eda8728384e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8enVyaWNoJTIwc3dpdHplcmxhbmR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" />
        <Card.Body>
          <Card.Title>Zurich</Card.Title>
        </Card.Body>
      </Card>
      </Col>
      
      <Col  sm={3}>
      <Card>
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1583495833696-852f6573e8ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8QmVybnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" />
        <Card.Body>
          <Card.Title>Bern</Card.Title>
        </Card.Body>
      </Card>
      </Col>
      <Col sm={3}>
      <Card>
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1548002181-1b5d96fd717c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGdlbmV2YXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" />
        <Card.Body>
          <Card.Title>Genva</Card.Title>
        </Card.Body>
      </Card>
      </Col>
      </Row>
    </CardGroup>
    </Container>
    </>
  );
}

export default Location;