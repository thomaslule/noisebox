import React from 'react';
import { PageHeader, Grid, Row, Col } from 'react-bootstrap';
import MuteAll from './MuteAll';
import Error from './Error';
import Components from './Components';
import Connections from './Connections';
import Bindings from './Bindings';
import ShareLink from './ShareLink';
import SetupJson from './SetupJson';

export default () => (
  <Grid>
    <PageHeader>noisebox <MuteAll /></PageHeader>
    <Error />
    <Row>
      <Col md={6}><Components /><Connections /></Col>
      <Col md={6}><Bindings /></Col>
    </Row>
    <Row>
      <Col md={12}><ShareLink /></Col>
    </Row>
    <Row>
      <Col md={12}><SetupJson /></Col>
    </Row>
  </Grid>
);
