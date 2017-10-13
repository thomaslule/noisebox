import React from 'react';
import { FormGroup, Col, ControlLabel, Button } from 'react-bootstrap';

export default ({
  label, labelTrue, labelFalse, value, onChange,
}) => (
  <FormGroup>
    <Col componentClass={ControlLabel} md={3}>{label}</Col>
    <Col md={9}>
      <Button
        onClick={() => onChange(!value)}
      >
        {value ? labelTrue : labelFalse}
      </Button>
    </Col>
  </FormGroup>
);
