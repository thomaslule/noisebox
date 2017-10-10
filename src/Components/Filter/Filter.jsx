import React from 'react';
import { ListGroupItem, Form, FormGroup, ControlLabel, Col, FormControl, Checkbox, Button } from 'react-bootstrap';

export default props => (
  <ListGroupItem>
    <Form horizontal>
      <FormGroup>
        <Col componentClass={ControlLabel} md={3}>Name</Col>
        <Col componentClass={FormControl.Static} md={9}>{props.component.id}</Col>
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
        <Col componentClass={ControlLabel} md={3}>Type</Col>
        <Col md={9}>
          <FormControl value={props.component.params.type} onChange={e => props.onChangeType(props.component.id, e.target.value)} componentClass="select">
            <option value="lowpass">lowpass</option>
            <option value="highpass">highpass</option>
            <option value="bandpass">bandpass</option>
            <option value="lowshelf">lowshelf</option>
            <option value="highshelf">highshelf</option>
            <option value="notch">notch</option>
            <option value="allpass">allpass</option>
            <option value="peaking">peaking</option>
          </FormControl>
        </Col>
      </FormGroup>
      <FormGroup>
        <Col componentClass={ControlLabel} md={3}>To master</Col>
        <Col md={9}>
          <Checkbox checked={props.component.params.toMaster} onChange={e => props.onChangeToMaster(props.component.id, e.target.checked)} />
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
