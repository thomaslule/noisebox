import React from 'react';

export default props => (
  <div>
    <h2>Oscillator</h2>
    <p>Type</p>
    <select value={props.type} onChange={e => props.onChangeType(e.target.value)}>
      <option value="sine">sine</option>
      <option value="square">square</option>
      <option value="triangle">triangle</option>
      <option value="sawtooth">sawtooth</option>
    </select>
    <p>Frequency</p>
    <input type="number" value={props.frequency} onChange={e => props.onChangeFrequency(e.target.value)} />
    <p>To master</p>
    <input type="checkbox" checked={props.toMaster} onChange={e => props.onChangeToMaster(e.target.checked)} />
  </div>
);
