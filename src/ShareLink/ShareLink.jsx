import React from 'react';
import { Panel, Row, Col, ControlLabel } from 'react-bootstrap';

export default props => (

  <Panel header="Share">
    <Row>
      <Col componentClass={ControlLabel} md={3}>Share this setup</Col>
      <Col componentClass={ControlLabel} md={9}><a href={props.stateLink}>Noisebox setup</a></Col>
    </Row>
  </Panel>
);
