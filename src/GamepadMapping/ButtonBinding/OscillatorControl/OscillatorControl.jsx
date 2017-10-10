import React from 'react';

export default (props) => {
  const params = props.type === 'set_frequency'
    ? <input type="number" value={props.params.frequency} onChange={e => props.onChangeSetFrequencyParams(props.button, { frequency: e.target.value })} />
    : null;
  return (
    <div>
      <h2>Oscillator Control</h2>
      <p>Type</p>
      <select value={props.type} onChange={e => props.onChangeType(props.button, e.target.value)}>
        <option value="none">none</option>
        <option value="set_frequency">set frequency</option>
      </select>
      {params}
    </div>
  );
};
