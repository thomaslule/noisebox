import React from 'react';
import { ListGroupItem, Form } from 'react-bootstrap';
import { Label, Select, Button, ParamField } from '../../Shared';

export default ({
  component, paramFields, connectToComponents, onChangeParam, onChangeConnectTo, onDelete,
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
      <Select
        label="Connect to"
        value={component.connectTo}
        onChange={e => onChangeConnectTo(e.target.value)}
        options={[{ text: 'master', value: 'master' }].concat(connectToComponents.map(c => ({ text: c, value: c })))}
      />
      <Button onClick={onDelete} text="Delete" />
    </Form>
  </ListGroupItem>
);
