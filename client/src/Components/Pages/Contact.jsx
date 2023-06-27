// import"./Contact.css"
// import  HotelImg from "../../assets/Hotel.jpg"

// import { Container, Row, Col, Form, Button } from 'react-bootstrap';
// const ContactForm = () => {
//     return (
//       <Container>
//         <Row >
//           <Col  xs={12} md={7}  className="left-site">
//             <br />
//             <br />
//             <br /><br /><br />
//             <h1>Contact us</h1>
//             <p>Planning to visit our Hotel soon? Get insider tips on where to go.</p>
//             <Form  method="post">
//               <Form.Group controlId="name">
//                 <Form.Label >Full name</Form.Label>
//                 <Form.Control
//                   type="text"
//                   placeholder="Your Full Name"
//                   required
//                   style={{ border: 'none',borderBottom:'1px solid #757575' }}
//                   className="input"
//                 />
//               </Form.Group>
//               <Form.Group controlId="email">
//                 <Form.Label>Email Address</Form.Label>
//                 <Form.Control
//                   type="email"
//                   placeholder="Your Email Address"
//                   required
//                   style={{ border: 'none',borderBottom:'1px solid #757575' }}
//                   className="input"

//                 />
//               </Form.Group>
//               <Form.Group controlId="message">
//                 <Form.Label>Message</Form.Label>
//                 <Form.Control
//                   as="textarea"
//                   rows={6}
//                   placeholder="Your Message"
//                   required
//                   style={{ border: 'none',borderBottom:'1px solid #757575' }}
//                   className="input"
//                 />
//               </Form.Group>
//               <Button style={{backgroundColor:'#00ABB3' , marginTop:'3vh'}} type="submit" id="submit" name="submit">
//                 Send
//               </Button>
//             </Form>
//             <div id="error"></div>
//             <div id="success-msg"></div>
//           </Col>

//           <Col xs={12} md={5} className="right-col"><img src= {HotelImg} alt="insel"  style={{height:'60%', marginRight:'0 px'}} /></Col>

//         </Row>
//       </Container>
//     );

// }
// export default ContactForm;

import './Contact.css';
import HotelImg from '../../assets/Hotel.jpg';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    // Prepare the email data
    const data = {
      name,
      email,
      message
    };

    // Send the email using Nodemailer
    axios.post('/send-email', data)
      .then((response) => {
        setIsSending(false);
        setIsSent(true);
      })
      .catch((error) => {
        setIsSending(false);
        console.log(error);
      });
  };

  return (
    <Container>
      <Row>
        <Col xs={12} md={7} className="left-site">
          <br />
          <br />
          <br />
          <br />
          <br />
          <h1>Contact us</h1>
          <p>Planning to visit our Hotel soon? Get insider tips on where to go.</p>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Full name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your Full Name"
                required
                style={{ border: 'none', borderBottom: '1px solid #757575' }}
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Your Email Address"
                required
                style={{ border: 'none', borderBottom: '1px solid #757575' }}
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="message">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={6}
                placeholder="Your Message"
                required
                style={{ border: 'none', borderBottom: '1px solid #757575' }}
                className="input"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Form.Group>
            <Button
              style={{ backgroundColor: '#00ABB3', marginTop: '3vh' }}
              type="submit"
              id="submit"
              name="submit"
              disabled={isSending}
            >
              {isSending ? 'Sending...' : 'Send'}
            </Button>
          </Form>
          <div id="error"></div>
          {isSent && <div id="success-msg">Message sent successfully!</div>}
        </Col>
        <Col xs={12} md={5} className="right-col">
          <img src={HotelImg} alt="insel" style={{ height: '60%', marginRight: '0 px' }} />
        </Col>
      </Row>
    </Container>
  );
};

export default ContactForm;
