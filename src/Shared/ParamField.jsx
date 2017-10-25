import React from 'react';
import { Select, TextField, SwitchButton } from './';

export default ({ param, value, onChange }) => {
  if (param.type === 'number') {
    return (
      <TextField
        key={param.name}
        label={param.text}
        value={value}
        onChange={onChange}
      />
    );
  }
  if (param.type === 'select') {
    return (
      <Select
        key={param.name}
        label={param.text}
        value={value}
        onChange={onChange}
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
        onChange={onChange}
      />
    );
  }
  return null;
};
