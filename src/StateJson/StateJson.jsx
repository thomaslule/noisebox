import React from 'react';
import { Form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';


export default props => (
  <Form onSubmit={e => e.preventDefault()}>
    <FormGroup controlId="state">
      <ControlLabel>Config</ControlLabel>
      <FormControl
        componentClass="textarea"
        value={props.state}
        onChange={e => props.onChange(e.target.value)}
      />
    </FormGroup>
  </Form>
);
