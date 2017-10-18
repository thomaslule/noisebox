import React from 'react';
import { Form, FormGroup, Col, ControlLabel, FormControl, Button } from 'react-bootstrap';
import { Select, ParamField } from '../../../Shared';

export default ({
  availableEffectTypeIds,
  effect,
  paramFields,
  onChangeEffectType,
  onChangeParam,
  onDelete,
}) => (
  <Form horizontal onSubmit={e => e.preventDefault()}>
    <FormGroup>
      <Col componentClass={ControlLabel} md={3}>Component</Col>
      <Col componentClass={FormControl.Static} md={6}>{effect.componentId}</Col>
      <Col md={3}><Button onClick={() => onDelete()}>Delete</Button></Col>
    </FormGroup>
    {availableEffectTypeIds.length > 0 ? (
      <Select
        label="Effect type"
        value={effect.effectTypeId}
        onChange={e => onChangeEffectType(e.target.value)}
        options={availableEffectTypeIds.map(e => ({ text: e, value: e }))}
      />
      ) : null}
    {paramFields.map(param => (
      <ParamField
        param={param}
        value={effect.params[param.name]}
        onChange={onChangeParam}
        key={param.name}
      />))}
  </Form>
);
