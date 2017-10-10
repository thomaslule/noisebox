import React from 'react';
import Oscillator from './Oscillator';

export default (props) => {
  const components = props.components.map((component) => {
    if (component.type === 'oscillator') {
      return (<Oscillator key={component.id} type={component.params.type} frequency={component.params.frequency} toMaster={component.params.toMaster} />);
    }
    return null;
  });
  const add = <button onClick={() => props.addComponent()}>Add</button>;
  return <div>{components}{add}</div>;
};
