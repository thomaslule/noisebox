import React from 'react';
import { Select, NumberField, SwitchButton } from './';

export default ({ param, value, onChange }) => {
  if (param.type === 'number') {
    return (
      <NumberField
        key={param.name}
        label={param.text}
        value={value}
        onChange={e => onChange(param.name, e.target.value)}
      />
    );
  }
  if (param.type === 'select') {
    return (
      <Select
        key={param.name}
        label={param.text}
        value={value}
        onChange={e => onChange(param.name, e.target.value)}
        options={param.options.map(o => ({ text: o, value: o }))}
      />
    );
  }
  if (param.type === 'boolean') {
    return (
      <SwitchButton
        key={param.name}
        label={param.text}
        labelTrue={param.textTrue}
        labelFalse={param.textFalse}
        value={value}
        onChange={newValue => onChange(param.name, newValue)}
      />
    );
  }
  return null;
};
