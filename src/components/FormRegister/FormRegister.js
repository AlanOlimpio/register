import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

const statesNames = [
  'AC',
  'AL',
  'AP',
  'AM',
  'BA',
  'CE',
  'DF',
  'ES',
  'GO',
  'MA',
  'MS',
  'MT',
  'MG',
  'PA',
  'PB',
  'PR',
  'PE',
  'PI',
  'RJ',
  'RN',
  'RS',
  'RO',
  'RR',
  'SC',
  'SP',
  'SE',
  'TO',
];

function FormRegister() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    addressOne: '',
    addressTwo: '',
    zip: '',
    state: '',
    checkMeOut: false,
  });

  function handleForm(e) {
    e.preventDefault();
    console.log(formData);
  }

  return (
    <Form onSubmit={(e) => handleForm(e)}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control
          name="addressOne"
          placeholder="1234 Main St"
          onChange={(e) =>
            setFormData({ ...formData, addressOne: e.target.value })
          }
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control
          name="addressTwo"
          placeholder="Apartment, studio, or floor"
          onChange={(e) =>
            setFormData({ ...formData, addressTwo: e.target.value })
          }
        />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control
            name="city"
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select
            name="state"
            value={formData.states}
            required
            onChange={(e) =>
              setFormData({ ...formData, state: e.target.value })
            }
          >
            <option value="">Choose</option>
            {statesNames.map((state) => (
              <option key={`state-name-${state}`} value={state}>
                {state}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control name="zip" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check
          type="checkbox"
          label="Check me out"
          name="checkMeOut"
          checked={formData.checkMeOut}
          onChange={(e) =>
            setFormData({ ...formData, checkMeOut: e.target.checked })
          }
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
      <p className="mt-3 text-break">{JSON.stringify(formData)}</p>
    </Form>
  );
}

export default FormRegister;
