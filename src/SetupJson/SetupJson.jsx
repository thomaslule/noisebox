import React from 'react';
import { Panel, Form, FormGroup, Col, ControlLabel, FormControl } from 'react-bootstrap';

export default ({ stateJson, stateJsonChange }) => (
  <Panel header="Config">
    <Form onSubmit={e => e.preventDefault()}>
      <FormGroup controlId="state">
        <Col componentClass={ControlLabel} md={3}>Config as json</Col>
        <Col md={9}>
          <FormControl
            componentClass="textarea"
            value={stateJson}
            onChange={e => stateJsonChange(e.target.value)}
          />
        </Col>
      </FormGroup>
    </Form>
  </Panel>
);
