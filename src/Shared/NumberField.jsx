import React from 'react';
import { FormGroup, Col, FormControl, ControlLabel } from 'react-bootstrap';

export default ({
  label, onChange, ...rest
}) => (
  <FormGroup>
    <Col componentClass={ControlLabel} md={3}>{label}</Col>
    <Col md={9}>
      <FormControl
        type="number"
        onChange={e => onChange(Number(e.target.value))}
        {...rest}
      />
    </Col>
  </FormGroup>
);
