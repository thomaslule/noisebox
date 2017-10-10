import React from 'react';
import { PageHeader, Grid, Row, Col } from 'react-bootstrap';
import Components from './Components';
import GamepadMapping from './GamepadMapping';

export default () => (
  <Grid>
    <PageHeader>noisebox</PageHeader>
    <Row>
      <Col md={6}><Components /></Col>
      <Col md={6}><GamepadMapping /></Col>
    </Row>
  </Grid>
);
