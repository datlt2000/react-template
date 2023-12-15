import React from 'react'
import { Link } from 'react-router-dom'
import {
  Button,
  Card,
  CardGroup,
  Col,
  Container,
  Form,
  InputGroup,
  Row,
} from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import {faLock} from "@fortawesome/free-solid-svg-icons"

const Login = () => {
  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <CardGroup>
              <Card className="p-4">
                <Card.Body>
                  <Form>
                    <h1>Login</h1>
                    <p className="text-body-secondary">Sign In to your account</p>
                    <InputGroup className="mb-3">
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faUser} />
                      </InputGroup.Text>
                      <Form.Control placeholder="Username" autoComplete="username" />
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faLock} />
                      </InputGroup.Text>
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                      />
                    </InputGroup>
                    <Row>
                      <Col xs={6}>
                        <Button color="primary" className="px-4">
                          Login
                        </Button>
                      </Col>
                      <Col xs={6} className="text-right">
                        <Button color="link" className="px-0">
                          Forgot password?
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </Card.Body>
              </Card>
              <Card className="text-white bg-primary py-5" style={{ width: '44%' }}>
                <Card.Body className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <Link to="/register">
                      <Button color="primary" className="mt-3" active tabIndex={-1}>
                        Register Now!
                      </Button>
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </CardGroup>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Login
