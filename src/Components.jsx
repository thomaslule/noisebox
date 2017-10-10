import React from 'react';
import Oscillator from './Oscillator';


export default (props) => {
  const components = props.params.map((component, index) => {
    if (component.type === 'oscillator') {
      return (<Oscillator
        key={index}
        params={component.params}
        onChangeType={value => props.onOscillatorChangeType(index, value)}
        onChangeFrequency={value => props.onOscillatorChangeFrequency(index, value)}
        onChangeToMaster={value => props.onOscillatorChangeToMaster(index, value)}
      />);
    }
    return null;
  });
  const add = <button onClick={() => props.onAddComponent()}>Add</button>;
  return <div>{components}{add}</div>;
};
