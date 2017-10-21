import React from 'react';
import { ListGroupItem, Form } from 'react-bootstrap';
import { Label, Button, ParamField } from '../Shared';

export default ({
  component, paramFields, componentChangeParam, componentDelete,
}) => (
  <ListGroupItem>
    <Form horizontal onSubmit={e => e.preventDefault()}>
      <Label label="Name" value={component.id} />
      {paramFields.map(param => (
        <ParamField
          param={param}
          value={component.params[param.name]}
          onChange={(name, value) => componentChangeParam(component.id, param.name, value)}
          key={param.name}
        />
      ))}
      <Button onClick={() => componentDelete(component.id)} text="Delete" />
    </Form>
  </ListGroupItem>
);
