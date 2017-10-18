import React from 'react';
import { Form } from 'react-bootstrap';
import { Label, Button } from '../../Shared';

export default ({ action, canDelete, onDelete }) => (
  <Form horizontal onSubmit={e => e.preventDefault()}>
    <Label label="Action" value={action} />
    {canDelete ? <Button text="Delete" onClick={() => onDelete()} /> : null}
  </Form>
);
