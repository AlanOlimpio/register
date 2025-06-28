import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import FormRegister from '../FormRegister';
import { Outlet } from 'react-router-dom';

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
      <Row>
        <Outlet />
      </Row>
    </Container>
  );
};

export default Register;
