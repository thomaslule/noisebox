import React from 'react';
import { Form } from 'react-bootstrap';
import { Label, Select, Button, ParamField } from '../../../Shared';

export default ({
  availableEffects,
  effect,
  paramFields,
  onChangeEffect,
  onChangeParam,
  onDelete,
}) => (
  <Form horizontal onSubmit={e => e.preventDefault()}>
    <Label label="Component" value={effect.componentId} />
    {
        availableEffects.length > 0
        ? (
          <Select
            label="Effect"
            value={effect.effectId}
            onChange={e => onChangeEffect(e.target.value)}
            options={availableEffects.map(e => ({ text: e, value: e }))}
          />
        )
        : null
      }
    {paramFields.map(param => (
      <ParamField
        param={param}
        value={effect.params[param.name]}
        onChange={onChangeParam}
        key={param.name}
      />
    ))}
    <Button text="Delete" onClick={() => onDelete()} />
  </Form>
);
