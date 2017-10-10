import React from 'react';
import { ListGroupItem, Form, FormGroup, ControlLabel, Col, FormControl, Checkbox } from 'react-bootstrap';

export default props => (
  <ListGroupItem>
    <Form horizontal>
      <FormGroup>
        <Col componentClass={ControlLabel} md={3}>Name</Col>
        <Col componentClass={FormControl.Static} md={9}>{props.id}</Col>
      </FormGroup>
      <FormGroup>
        <Col componentClass={ControlLabel} md={3}>Type</Col>
        <Col md={9}>
          <FormControl value={props.type} onChange={e => props.onChangeType(e.target.value)} componentClass="select">
            <option value="sine">sine</option>
            <option value="square">square</option>
            <option value="triangle">triangle</option>
            <option value="sawtooth">sawtooth</option>
          </FormControl>
        </Col>
      </FormGroup>
      <FormGroup>
        <Col componentClass={ControlLabel} md={3}>Frequency</Col>
        <Col md={9}>
          <FormControl
            type="number"
            value={props.frequency}
            onChange={e => props.onChangeFrequency(e.target.value)}
            required
          />
        </Col>
      </FormGroup>
      <FormGroup>
        <Col componentClass={ControlLabel} md={3}>To master</Col>
        <Col md={9}>
          <Checkbox checked={props.toMaster} onChange={e => props.onChangeToMaster(e.target.checked)} />
        </Col>
      </FormGroup>
    </Form>
  </ListGroupItem>
);
