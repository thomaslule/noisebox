import React from 'react';
import { ListGroupItem, Form, FormGroup, ControlLabel, Col, FormControl, Button } from 'react-bootstrap';
import { get } from '../componentsDictionary';

const paramToControl = (param, props) => {
  if (param.type === 'number') {
    return (
      <FormControl
        type="number"
        value={props.component.params[param.name]}
        onChange={e => props.onChangeParam(props.component.id, param.name, Number(e.target.value))}
        required
      />
    );
  }
  if (param.type === 'select') {
    return (
      <FormControl
        value={props.component.params[param.name]}
        onChange={e => props.onChangeParam(props.component.id, param.name, e.target.value)}
        componentClass="select"
      >
        {param.options.map(o => <option key={o} value={o}>{o}</option>)}
      </FormControl>
    );
  }
  return null;
};

const paramToField = (param, props) => (
  <FormGroup key={param.name}>
    <Col componentClass={ControlLabel} md={3}>{param.text}</Col>
    <Col md={9}>
      {paramToControl(param, props)}
    </Col>
  </FormGroup>
);

export default props => (
  <ListGroupItem>
    <Form horizontal>
      <FormGroup>
        <Col componentClass={ControlLabel} md={3}>Name</Col>
        <Col componentClass={FormControl.Static} md={9}>{props.component.id}</Col>
      </FormGroup>
      {get(props.component.type).params.map(param => paramToField(param, props))}
      <FormGroup>
        <Col componentClass={ControlLabel} md={3}>Connect to</Col>
        <Col md={9}>
          <FormControl
            value={props.component.connectTo}
            onChange={e => props.onChangeConnectTo(props.component.id, e.target.value)}
            componentClass="select"
          >
            <option value="master">master</option>
            {props.connectToComponents.map(c => <option key={c} value={c}>{c}</option>)}
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
