import React from 'react';
import { FormGroup, Col, Button } from 'react-bootstrap';

export default props => (
  <FormGroup>
    <Col mdOffset={3} md={9}>
      <Button onClick={props.onClick}>{props.text}</Button>
    </Col>
  </FormGroup>
);
