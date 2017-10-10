import React from 'react';
import { FormControl, Col, ControlLabel, FormGroup } from 'react-bootstrap';

export default (props) => {
  const params = props.type === 'set_frequency'
    ? (
      <FormGroup>
        <Col componentClass={ControlLabel} md={3}>Frequency</Col>
        <Col md={9}>
          <FormControl
            type="number"
            value={props.params.frequency}
            onChange={e => props.onChangeSetFrequencyParams(props.button, { frequency: e.target.value })}
            required
          />
        </Col>
      </FormGroup>
    )
    : null;
  return (
    <div>
      <FormGroup>
        <Col componentClass={ControlLabel} md={3}>Type</Col>
        <Col md={9}>
          <FormControl value={props.type} onChange={e => props.onChangeType(props.button, e.target.value)} componentClass="select">
            <option value="none">none</option>
            <option value="set_frequency">set frequency</option>
          </FormControl>
        </Col>
      </FormGroup>
      {params}
    </div>
  );
};
