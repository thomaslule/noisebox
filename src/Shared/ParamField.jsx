import React from 'react';
import { Select, NumberField } from './';

export default ({ param, value, onChange }) => {
  if (param.type === 'number') {
    return (
      <NumberField
        key={param.name}
        label={param.text}
        value={value}
        onChange={e => onChange(param.name, Number(e.target.value))}
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
  return null;
};
