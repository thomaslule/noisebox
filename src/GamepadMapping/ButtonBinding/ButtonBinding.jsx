import React from 'react';
import OscillatorControl from './OscillatorControl';

export default (props) => {
  const control = props.selectedComponent === 'none' ? null : <OscillatorControl button={props.button} oscillator={props.selectedComponent} />;
  return (
    <div>
      <h2>Bouton {props.button}</h2>
      <select value={props.selectedComponent} onChange={e => props.onChangeComponent(props.button, e.target.value)}>
        <option value="none">none</option>
        {props.components.map(comp => (<option key={comp.id} value={comp.id}>{comp.id}</option>))}
      </select>
      {control}
    </div>);
};
