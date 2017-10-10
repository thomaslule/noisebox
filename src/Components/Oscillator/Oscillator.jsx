import React from 'react';
import { ListGroupItem, Form, FormGroup, ControlLabel, Col, FormControl, Button } from 'react-bootstrap';

export default props => (
  <ListGroupItem>
    <Form horizontal>
      <FormGroup>
        <Col componentClass={ControlLabel} md={3}>Name</Col>
        <Col componentClass={FormControl.Static} md={9}>{props.component.id}</Col>
      </FormGroup>
      <FormGroup>
        <Col componentClass={ControlLabel} md={3}>Type</Col>
        <Col md={9}>
          <FormControl value={props.component.params.type} onChange={e => props.onChangeType(props.component.id, e.target.value)} componentClass="select">
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
            value={props.component.params.frequency}
            onChange={e => props.onChangeFrequency(props.component.id, Number(e.target.value))}
            required
          />
        </Col>
      </FormGroup>
      <FormGroup>
        <Col componentClass={ControlLabel} md={3}>Connect to</Col>
        <Col md={9}>
          <FormControl
            value={props.component.connectTo}
            onChange={e => props.onChangeConnectTo(props.component.id, e.target.value)}
            componentClass="select"
          >
            <option value="master">master</option>
            {props.otherComponents.map(c => <option key={c} value={c}>{c}</option>)}
          </FormControl>
        </Col>
      </FormGroup>
      <FormGroup>
        <Col mdOffset={3} md={9}>
          <Button onClick={() => props.onDelete(props.component.id)}>Delete</Button>
        </Col>
      </FormGroup>
    </Form>
  </ListGroupItem>
);
