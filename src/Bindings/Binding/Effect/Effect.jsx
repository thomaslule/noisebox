import React from 'react';
import { Form } from 'react-bootstrap';
import { Select, ParamField, Button } from '../../../Shared';

export default ({
  availableEffectTypeIds,
  effect,
  paramFields,
  allComponentIds,
  onChangeComponentId,
  onChangeEffectType,
  onChangeParam,
  onDelete,
}) => (
  <Form horizontal onSubmit={e => e.preventDefault()}>
    <Select
      label="Component"
      value={effect.componentId}
      onChange={e => onChangeComponentId(e.target.value)}
      options={allComponentIds.map(e => ({ text: e, value: e }))}
    />
    <Select
      label="Effect type"
      value={effect.effectTypeId}
      onChange={e => onChangeEffectType(e.target.value)}
      options={availableEffectTypeIds.map(e => ({ text: e, value: e }))}
    />
    {paramFields.map(param => (
      <ParamField
        param={param}
        value={effect.params[param.name]}
        onChange={onChangeParam}
        key={param.name}
      />))}
    <Button text="Delete" onClick={() => onDelete()} />
  </Form>
);
