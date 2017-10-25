import React from 'react';
import { FormGroup, Col, FormControl, ControlLabel } from 'react-bootstrap';

export default ({
  label, value, onChange, options,
}) => (
  <FormGroup>
    <Col componentClass={ControlLabel} md={3}>{label}</Col>
    <Col md={9}>
      <FormControl
        value={value}
        onChange={e => onChange(e.target.value)}
        componentClass="select"
      >
        {options.map(o => <option value={o.value} key={o.value}>{o.text}</option>)}
      </FormControl>
    </Col>
  </FormGroup>
);
