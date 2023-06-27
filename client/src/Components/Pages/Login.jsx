
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { Formik, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import "./Login.css";
;

const LoginForm = () => {
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const initialValues = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    acceptTerms: false
  };

  const validationSchema = yup.object().shape({
    firstName: yup.string().when("showRegisterForm", {
      is: true,
      then: yup.string().required("First Name is required")
    }),
    lastName: yup.string().when("showRegisterForm", {
      is: true,
      then: yup.string().required("Last Name is required")
    }),
    username: yup.string().when("showRegisterForm", {
      is: true,
      then: yup.string().required("Username is required")
    }),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().required("Password is required"),
    acceptTerms: yup
      .boolean()
      .oneOf([true], "Accept Terms and Conditions is required")
      .required()
  });

  const handleToggleForm = () => {
    setShowRegisterForm(!showRegisterForm);
  };

  const handleFormSubmit = (values) => {
    const { email, password } = values;
    // Handle login or registration logic here
  };

  return (
    <>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
      >
        <Container className="mt5" style={{ marginTop: '20vh' }}>
          <Row className="justify-content-center">
            <Col className=" shadow  p-5 mb-5 bg bg-white rounded  " md={5}>
              <Form style={{ paddingLeft: '10vh' }}>
                <h3 style={{ paddingBottom: '20px' }}>
                  {showRegisterForm ? "Registeration" : "Login"} Form
                </h3>
                {showRegisterForm && (
                  <Row>
                    <Col sm={12}>
                      <Form.Group >
                        <Form.Label style={{ paddingRight: "42px", fontSize: "15px" }}>
                          Firstname
                        </Form.Label>
                        <Field
                          type="text"
                          id="firstName"
                          name="firstName"
                          required
                          className="custom-input"
                        />
                        <ErrorMessage name="firstName" component="div" style={{ color: "red", fontSize: "10px" }} />
                      </Form.Group>
                    </Col>
                  </Row>
                )}
                {showRegisterForm && (
                  <Row>
                    <Col md={12}>
                      <Form.Group className="mb-1">
                        <Form.Label style={{ paddingRight: "42px", fontSize: "15px" }}>
                          Lastname
                        </Form.Label>
                        <Field
                          type="text"
                          id="lastName"
                          name="lastName"
                          required
                          className="custom-input"
                        />
                        <ErrorMessage name="lastName" component="div" style={{ color: "red", fontSize: "10px" }} />
                      </Form.Group>
                    </Col>
                  </Row>
                )}
                {showRegisterForm && (
                  <Row>
                    <Col md={12}>
                      <Form.Group className="mb-1">
                        <Form.Label style={{ paddingRight: "42px", fontSize: "15px" }}>
                          Username
                        </Form.Label>
                        <Field
                          type="text"
                          id="username"
                          name="username"
                          required
                          className="custom-input"
                        />
                        <ErrorMessage name="username" component="div" style={{ color: "red", fontSize: "10px" }} />
                      </Form.Group>
                    </Col>
                  </Row>
                )}

                <Row>
                  <Col md={12}>
                    <Form.Group className="mb-1">
                      <Form.Label style={{ paddingRight: "42px", fontSize: "15px" }}>
                        Email{" "}
                      </Form.Label>
                      <Field type="email" id="email" name="email" required className="custom-input" />
                      <ErrorMessage name="email" component="div" style={{ color: "red", fontSize: "10px" }} />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <Form.Group className="mb-1" controlId="formBasicPassword">
                      <Form.Label style={{ paddingRight: "42px", fontSize: "15px" }}>
                        Password
                      </Form.Label>
                      <Field
                        type="password"
                        id="password"
                        name="password"
                        required
                        className="custom-input"
                      />
                      <ErrorMessage name="password" component="div" style={{ color: "red", fontSize: "10px" }} />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={12}>
                    {showRegisterForm && (
                      <Form.Group
                        className="mb-1"
                        controlId="formBasicCheckbox"
                      >
                        {/* <Form.Check type="checkbox" label="  Accept Terms and Conditions" required  /> */}
                        <label style={{ fontSize: '15px' }}>
                          <Field type="checkbox" name="acceptTerms" required />
                          Accept Terms and Conditions
                        </label>
                        <ErrorMessage name="acceptTerms" component="div" style={{ color: "red", fontSize: "10px" }} />
                      </Form.Group>
                    )}
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Button
                      style={{ backgroundColor: "#00ABB3", paddingLeft: "2vh", marginTop: '15px' }}
                      type="submit"
                    >
                      {showRegisterForm ? "Register" : "Login"}
                    </Button>
                  </Col>
                </Row>
                <Row>
                  <Col style={{ paddingTop: "10px" }}>
                    {showRegisterForm
                      ? "Already have an account?"
                      : "Don't have an account?"}{" "}
                    <Nav.Link type="button" onClick={handleToggleForm}>
                      {showRegisterForm ? "Login" : "Create Account"}
                    </Nav.Link>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Container>
      </Formik>
    </>
  );
};

export default LoginForm;


