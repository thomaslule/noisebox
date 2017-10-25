import React from 'react';
import { Row, Col, ControlLabel } from 'react-bootstrap';

export default ({ setupLink }) => (
  <Row>
    <Col componentClass={ControlLabel} md={2}>Share this setup</Col>
    <Col componentClass={ControlLabel} md={10}><a href={setupLink}>Noisebox setup</a></Col>
  </Row>
);
