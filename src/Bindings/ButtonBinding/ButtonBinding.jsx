import React from 'react';
import { Form, ListGroupItem, FormControl, Col, ControlLabel, FormGroup } from 'react-bootstrap';
import OscillatorControl from './OscillatorControl';

export default (props) => {
  const control = props.selectedComponent === 'none' ? null : <OscillatorControl button={props.button} oscillator={props.selectedComponent} />;
  return (
    <ListGroupItem>
      <Form horizontal>
        <FormGroup>
          <Col componentClass={ControlLabel} md={3}>Button</Col>
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
      </Form>
    </ListGroupItem>);
};
