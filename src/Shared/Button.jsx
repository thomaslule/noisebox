import React from 'react';
import { FormGroup, Col, Button } from 'react-bootstrap';

export default ({ onClick, text, ...rest }) => (
  <FormGroup>
    <Col mdOffset={3} md={9}>
      <Button onClick={onClick} {...rest}>{text}</Button>
    </Col>
  </FormGroup>
);
