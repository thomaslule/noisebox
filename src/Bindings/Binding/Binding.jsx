import React from 'react';
import { Form, ListGroupItem } from 'react-bootstrap';
import { Label, Select, Button, ParamField } from '../../Shared';

export default ({
  binding,
  components,
  availableEffects,
  paramFields,
  onChangeComponent,
  onChangeEffect,
  onChangeParam,
  onDelete,
}) => (
  <ListGroupItem>
    <Form horizontal>
      <Label label="Action" value={binding.action} />
      <Select
        label="Component"
        value={binding.component}
        onChange={e => onChangeComponent(e.target.value)}
        options={[{ text: 'none', value: 'none' }].concat(components.map(c => ({ text: c, value: c })))}
      />
      {
        availableEffects.length > 0
        ? (
          <Select
            label="Effect"
            value={binding.effect}
            onChange={e => onChangeEffect(e.target.value)}
            options={availableEffects.map(e => ({ text: e, value: e }))}
          />
        )
        : null
      }
      {
        binding.effect !== 'none'
        ? paramFields.map(param => (
          <ParamField
            param={param}
            value={binding.params[param.name]}
            onChange={onChangeParam}
            key={param.name}
          />
        ))
        : null
      }
      <Button text="Delete" onClick={() => onDelete()} />
    </Form>
  </ListGroupItem>
);
