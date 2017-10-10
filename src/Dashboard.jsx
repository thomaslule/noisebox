import React from 'react';
import { PageHeader, Grid, Row, Col } from 'react-bootstrap';
import MuteAll from './MuteAll';
import Components from './Components';
import Bindings from './Bindings';
import StateJson from './StateJson';

export default () => (
  <Grid>
    <PageHeader>noisebox <MuteAll /></PageHeader>
    <Row>
      <Col md={6}><Components /></Col>
      <Col md={6}><Bindings /></Col>
    </Row>
    <Row>
      <Col md={12}><StateJson /></Col>
    </Row>
  </Grid>
);
