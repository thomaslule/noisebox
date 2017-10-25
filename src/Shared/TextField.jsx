import React from 'react';
import { FormGroup, Col, FormControl, ControlLabel } from 'react-bootstrap';

export default ({ label, value, onChange }) => (
  <FormGroup>
    <Col componentClass={ControlLabel} md={3}>{label}</Col>
    <Col md={9}>
      <FormControl
        type="text"
        value={value}
        onChange={onChange}
      />
    </Col>
  </FormGroup>
);
