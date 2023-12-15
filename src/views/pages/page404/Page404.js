import React from 'react'
import {
  Button,
  Col,
  Container,
  Form,
  InputGroup,
  Row,
} from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";

const Page404 = () => {
  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <div className="clearfix">
              <h1 className="float-start display-3 me-4">404</h1>
              <h4 className="pt-3">Oops! You{"'"}re lost.</h4>
              <p className="text-body-secondary float-start">
                The page you are looking for was not found.
              </p>
            </div>
            <InputGroup className="input-prepend">
              <InputGroup.Text>
                <FontAwesomeIcon icon={faUser} />
              </InputGroup.Text>
              <Form.Control type="text" placeholder="What are you looking for?" />
              <Button color="info">Search</Button>
            </InputGroup>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Page404
