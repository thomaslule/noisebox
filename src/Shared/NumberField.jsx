import React from 'react';
import { FormGroup, Col, FormControl, ControlLabel } from 'react-bootstrap';

export default props => (
  <FormGroup>
    <Col componentClass={ControlLabel} md={3}>{props.label}</Col>
    <Col md={9}>
      <FormControl
        type="text"
        value={props.value}
        onChange={props.onChange}
        required
      />
    </Col>
  </FormGroup>
);