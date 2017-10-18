import React from 'react';
import { Form } from 'react-bootstrap';
import { Label, Select, Button, ParamField } from '../../../Shared';

export default ({
  availableEffectTypeIds,
  effect,
  paramFields,
  onChangeEffectType,
  onChangeParam,
  onDelete,
}) => (
  <Form horizontal onSubmit={e => e.preventDefault()}>
    <Label label="Component" value={effect.componentId} />
    {
      availableEffectTypeIds.length > 0
      ? (
        <Select
          label="Effect type"
          value={effect.effectTypeId}
          onChange={e => onChangeEffectType(e.target.value)}
          options={availableEffectTypeIds.map(e => ({ text: e, value: e }))}
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
