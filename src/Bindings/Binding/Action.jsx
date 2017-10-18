import React from 'react';
import { Form, FormGroup, Col, ControlLabel, FormControl, Button } from 'react-bootstrap';

export default ({ action, canDelete, onDelete }) => (
  <Form horizontal onSubmit={e => e.preventDefault()}>
    <FormGroup>
      <Col componentClass={ControlLabel} md={3}>Action</Col>
      <Col componentClass={FormControl.Static} md={6}>{action}</Col>
      {canDelete ? <Col><Button onClick={() => onDelete()}>Delete</Button></Col> : null}
    </FormGroup>
  </Form>
);
