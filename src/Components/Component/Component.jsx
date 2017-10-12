import React from 'react';
import { ListGroupItem, Form } from 'react-bootstrap';
import { Label, NumberField, Select, Button } from '../../Shared';
import { get } from '../componentsDictionary';

const paramToField = (param, props) => {
  if (param.type === 'number') {
    return (
      <NumberField
        key={param.name}
        value={props.component.params[param.name]}
        onChange={e => props.onChangeParam(props.component.id, param.name, Number(e.target.value))}
      />
    );
  }
  if (param.type === 'select') {
    return (
      <Select
        key={param.name}
        label={param.text}
        value={props.component.params[param.name]}
        onChange={e => props.onChangeParam(props.component.id, param.name, e.target.value)}
        options={param.options.map(o => ({ text: o, value: o }))}
      />
    );
  }
  return null;
};

export default props => (
  <ListGroupItem>
    <Form horizontal>
      <Label text="Name" value={props.component.id} />
      {get(props.component.type).params.map(param => paramToField(param, props))}
      <Select
        label="Connect to"
        value={props.component.connectTo}
        onChange={e => props.onChangeConnectTo(props.component.id, e.target.value)}
        options={[{ text: 'master', value: 'master' }].concat(props.connectToComponents.map(c => ({ text: c, value: c })))}
      />
      <Button onClick={() => props.onDelete(props.component.id)} text="Delete" />
    </Form>
  </ListGroupItem>
);
