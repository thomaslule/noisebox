import React from 'react';
import { Form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

export default ({ stateJson, stateJsonChange }) => (
  <Form onSubmit={e => e.preventDefault()}>
    <FormGroup controlId="state">
      <ControlLabel>Config</ControlLabel>
      <FormControl
        componentClass="textarea"
        value={stateJson}
        onChange={e => stateJsonChange(e.target.value)}
      />
    </FormGroup>
  </Form>
);
