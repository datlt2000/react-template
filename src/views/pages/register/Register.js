import React from 'react'
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  InputGroup,
  Row,
} from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import {faLock} from "@fortawesome/free-solid-svg-icons"

const Register = () => {
  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col md={9} lg={7} xl={6}>
            <Card className="mx-4">
              <Card.Body className="p-4">
                <Form>
                  <h1>Register</h1>
                  <p className="text-body-secondary">Create your account</p>
                  <InputGroup className="mb-3">
                    <InputGroup.Text>
                      <FontAwesomeIcon icon={faUser} />
                    </InputGroup.Text>
                    <Form.Control placeholder="Username" autoComplete="username" />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <InputGroup.Text>@</InputGroup.Text>
                    <Form.Control placeholder="Email" autoComplete="email" />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <InputGroup.Text>
                      <FontAwesomeIcon icon={faLock} />
                    </InputGroup.Text>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      autoComplete="new-password"
                    />
                  </InputGroup>
                  <InputGroup className="mb-4">
                    <InputGroup.Text>
                      <FontAwesomeIcon icon={faLock} />
                    </InputGroup.Text>
                    <Form.Control
                      type="password"
                      placeholder="Repeat password"
                      autoComplete="new-password"
                    />
                  </InputGroup>
                  <div className="d-grid">
                    <Button color="success">Create Account</Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Register
