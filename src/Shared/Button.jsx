import React from 'react';
import { FormGroup, Col, Button, ControlLabel } from 'react-bootstrap';

export default ({
  onClick, label, text, ...rest
}) => (
  <FormGroup>
    <Col componentClass={ControlLabel} md={3}>{label}</Col>
    <Col md={9}>
      <Button onClick={onClick} {...rest}>{text}</Button>
    </Col>
  </FormGroup>
);
