import React from 'react';
import { FormGroup, Col, FormControl, ControlLabel } from 'react-bootstrap';

export default props => (
  <FormGroup>
    <Col componentClass={ControlLabel} md={3}>{props.label}</Col>
    <Col md={9}>
      <FormControl
        value={props.value}
        onChange={props.onChange}
        componentClass="select"
      >
        {props.options.map(o => <option value={o.value} key={o.value}>{o.text}</option>)}
      </FormControl>
    </Col>
  </FormGroup>
);
