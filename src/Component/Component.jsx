import React from 'react';
import { ListGroupItem, Form } from 'react-bootstrap';
import { Label, Button, ParamField } from '../Shared';

export default ({
  component, paramFields, onChangeParam, onDelete,
}) => (
  <ListGroupItem>
    <Form horizontal onSubmit={e => e.preventDefault()}>
      <Label label="Name" value={component.id} />
      {paramFields.map(param => (
        <ParamField
          param={param}
          value={component.params[param.name]}
          onChange={onChangeParam}
          key={param.name}
        />
      ))}
      <Button onClick={onDelete} text="Delete" />
    </Form>
  </ListGroupItem>
);
