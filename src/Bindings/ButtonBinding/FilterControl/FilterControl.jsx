import React from 'react';
import { FormControl, Col, ControlLabel, FormGroup } from 'react-bootstrap';

const availableControlTypes = (button) => {
  if (button.startsWith('press') || button.startsWith('release')) {
    return [{ name: 'set_frequency', label: 'set frequency' }];
  }
  if (button.startsWith('move')) {
    return [{ name: 'move_frequency', label: 'move frequency' }];
  }
  return [];
};

const getParamInputs = (props) => {
  if (props.type === 'set_frequency') {
    return (
      <FormGroup>
        <Col componentClass={ControlLabel} md={3}>Frequency</Col>
        <Col md={9}>
          <FormControl
            type="number"
            value={props.params.frequency}
            onChange={e => props.onChangeParams(props.button, { frequency: Number(e.target.value) })}
            required
          />
        </Col>
      </FormGroup>
    );
  }
  if (props.type === 'move_frequency') {
    return (
      <FormGroup>
        <Col componentClass={ControlLabel} md={3}>Sensibility</Col>
        <Col md={9}>
          <FormControl
            type="number"
            value={props.params.sensibility}
            onChange={e => props.onChangeParams(props.button, { sensibility: Number(e.target.value) })}
            required
          />
        </Col>
      </FormGroup>
    );
  }
  return null;
};

export default props => (
  <div>
    <FormGroup>
      <Col componentClass={ControlLabel} md={3}>Type</Col>
      <Col md={9}>
        <FormControl value={props.type} onChange={e => props.onChangeType(props.button, e.target.value)} componentClass="select">
          <option value="none">none</option>
          {availableControlTypes(props.button).map(c => <option value={c.name} key={c.name}>{c.label}</option>)}
        </FormControl>
      </Col>
    </FormGroup>
    {getParamInputs(props)}
  </div>
);
