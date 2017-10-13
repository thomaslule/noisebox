import React from 'react';
import { FormGroup, Col, ControlLabel, FormControl } from 'react-bootstrap';

export default props => (
  <FormGroup>
    <Col componentClass={ControlLabel} md={3}>{props.label}</Col>
    <Col componentClass={FormControl.Static} md={9}>{props.value}</Col>
  </FormGroup>
);
