import React from 'react';
import { Form } from 'react-bootstrap';
import { Button } from '../Shared';

export default ({ clearSetup }) => (
  <Form horizontal onSubmit={e => e.preventDefault()}>
    <Button onClick={clearSetup} label="Clear setup" text="Clear setup" />
  </Form>
);
