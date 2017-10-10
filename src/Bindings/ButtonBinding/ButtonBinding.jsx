import React from 'react';
import { Form, ListGroupItem, FormControl, Col, ControlLabel, FormGroup, Button } from 'react-bootstrap';
import OscillatorControl from './OscillatorControl';
import FilterControl from './FilterControl';

export default (props) => {
  let control;
  if (props.selectedComponentType === 'oscillator') {
    control = <OscillatorControl button={props.button} oscillator={props.selectedComponent} />;
  }
  if (props.selectedComponentType === 'filter') {
    control = <FilterControl button={props.button} />;
  }
  return (
    <ListGroupItem>
      <Form horizontal>
        <FormGroup>
          <Col componentClass={ControlLabel} md={3}>Action</Col>
          <Col componentClass={FormControl.Static} md={9}>{props.button}</Col>
        </FormGroup>
        <FormGroup>
          <Col componentClass={ControlLabel} md={3}>Component</Col>
          <Col md={9}>
            <FormControl value={props.selectedComponent} onChange={e => props.onChangeComponent(props.button, e.target.value)} componentClass="select">
              <option value="none">none</option>
              {props.components.map(comp => (<option key={comp.id} value={comp.id}>{comp.id}</option>))}
            </FormControl>
          </Col>
        </FormGroup>
        {control}
        <FormGroup>
          <Col mdOffset={3} md={9}>
            <Button onClick={() => props.onDelete(props.button)}>Delete</Button>
          </Col>
        </FormGroup>
      </Form>
    </ListGroupItem>);
};
