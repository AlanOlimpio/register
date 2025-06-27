import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import FormRegister from '../FormRegister';

const Register = () => {
  return (
    <Container>
      <Row>
        <h2 className="mt-4">Register</h2>
      </Row>
      <Row xs={1} md={12} className="mb-5">
        <Col className="p-2 mt-2">
          <FormRegister />
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
