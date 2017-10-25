import React from 'react';
import { Panel, Form } from 'react-bootstrap';
import { NumberField } from '../Shared';

export default ({ deadzone, deadzoneChange }) => (
  <Panel header="Deadzone">
    <Form horizontal onSubmit={e => e.preventDefault()}>
      <NumberField onChange={e => deadzoneChange(e.target.value)} value={deadzone} />
    </Form>
  </Panel>
);
