import React from 'react';
import { Form, FormGroup, Col, ControlLabel, FormControl } from 'react-bootstrap';

export default ({ stateJson, stateJsonChange }) => (
  <Form onSubmit={e => e.preventDefault()}>
    <FormGroup controlId="state">
      <Col componentClass={ControlLabel} md={2}>Setup as json</Col>
      <Col md={10}>
        <FormControl
          componentClass="textarea"
          value={stateJson}
          onChange={e => stateJsonChange(e.target.value)}
        />
      </Col>
    </FormGroup>
  </Form>
);
