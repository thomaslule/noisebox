import React from 'react';
import { Form } from 'react-bootstrap';
import { Select, ParamField, Button } from '../Shared';

export default ({
  effect,
  availableEffectTypeIds,
  paramFields,
  allComponentIds,
  effectChangeComponent,
  effectChangeEffectType,
  effectChangeParam,
  effectDelete,
}) => (
  <Form horizontal onSubmit={e => e.preventDefault()}>
    <Select
      label="Component"
      value={effect.componentId}
      onChange={e => effectChangeComponent(effect.id, e.target.value)}
      options={allComponentIds.map(e => ({ text: e, value: e }))}
    />
    <Select
      label="Effect type"
      value={effect.effectTypeId}
      onChange={e => effectChangeEffectType(effect.id, e.target.value)}
      options={availableEffectTypeIds.map(e => ({ text: e, value: e }))}
    />
    {paramFields.map(param => (
      <ParamField
        param={param}
        value={effect.params[param.name]}
        onChange={value => effectChangeParam(effect.id, param.name, value)}
        key={param.name}
      />))}
    <Button text="Delete" onClick={() => effectDelete(effect.id)} />
  </Form>
);
