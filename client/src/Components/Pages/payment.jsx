import React from 'react'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function Payment() {
  return (
    <>
      <br /><br /><br /><br /><br />
      <Container className="mt5" style={{ marginTop: '20vh' }}>
        <Row className="justify-content-center">
          
          <Col className=" shadow  p-5 mb-5 bg bg-white rounded  " md={5}>
          <h3>Checkout</h3>
            <PayPalScriptProvider options={{ clientId: "test" }}>
              <PayPalButtons style={{ backgroundColor: "red" }} />
            </PayPalScriptProvider>


          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Payment