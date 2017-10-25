import React from 'react';
import { Form } from 'react-bootstrap';
import { NumberField } from '../Shared';

export default ({ deadzone, deadzoneChange }) => (
  <Form horizontal onSubmit={e => e.preventDefault()}>
    <NumberField
      label="Deadzone"
      onChange={deadzoneChange}
      value={deadzone}
      step={0.01}
      min={0}
      max={1}
    />
  </Form>
);
