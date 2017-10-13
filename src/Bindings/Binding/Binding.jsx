import React from 'react';
import { Form, ListGroupItem } from 'react-bootstrap';
import { Label, Select, Button, NumberField } from '../../Shared';
import { get } from './effectsDictionary';

const paramToField = (param, props) => {
  if (param.type === 'number') {
    return (
      <NumberField
        key={param.name}
        label={param.text}
        value={props.params[param.name]}
        onChange={e => props.onChangeParam(param.name, Number(e.target.value))}
      />
    );
  }
  if (param.type === 'select') {
    return (
      <Select
        key={param.name}
        label={param.text}
        value={props.params[param.name]}
        onChange={e => props.onChangeParam(param.name, e.target.value)}
        options={param.options.map(o => ({ text: o, value: o }))}
      />
    );
  }
  return null;
};

export default props => (
  <ListGroupItem>
    <Form horizontal>
      <Label label="Action" value={props.action} />
      <Select
        label="Component"
        value={props.component}
        onChange={e => props.onChangeComponent(e.target.value)}
        options={[{ text: 'none', value: 'none' }].concat(props.components.map(c => ({ text: c, value: c })))}
      />
      {
        props.availableEffects.length > 0
        ? (
          <Select
            label="Effect"
            value={props.effect}
            onChange={e => props.onChangeEffect(e.target.value)}
            options={props.availableEffects.map(e => ({ text: e, value: e }))}
          />
        )
        : null
      }
      {
        props.effect !== 'none'
        ? get(props.effect).params.map(p => paramToField(p, props))
        : null
      }
      <Button text="Delete" onClick={() => props.onDelete()} />
    </Form>
  </ListGroupItem>
);
