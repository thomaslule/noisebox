import React from 'react';
import { Form, ListGroupItem } from 'react-bootstrap';
import { Label, Select, Button, ParamField } from '../../Shared';

export default props => (
  <ListGroupItem>
    <Form horizontal>
      <Label label="Action" value={props.binding.action} />
      <Select
        label="Component"
        value={props.binding.component}
        onChange={e => props.onChangeComponent(e.target.value)}
        options={[{ text: 'none', value: 'none' }].concat(props.components.map(c => ({ text: c, value: c })))}
      />
      {
        props.availableEffects.length > 0
        ? (
          <Select
            label="Effect"
            value={props.binding.effect}
            onChange={e => props.onChangeEffect(e.target.value)}
            options={props.availableEffects.map(e => ({ text: e, value: e }))}
          />
        )
        : null
      }
      {
        props.binding.effect !== 'none'
        ? props.paramFields.map(param => (
          <ParamField
            param={param}
            value={props.binding.params[param.name]}
            onChange={props.onChangeParam}
            key={param.name}
          />
        ))
        : null
      }
      <Button text="Delete" onClick={() => props.onDelete()} />
    </Form>
  </ListGroupItem>
);
