import React from 'react';
import { PageHeader, Grid, Row, Col } from 'react-bootstrap';
import Gamepads from './Gamepads';
import MuteAll from './MuteAll';
import Error from './Error';
import Components from './Components';
import Connections from './Connections';
import Deadzone from './Deadzone';
import Bindings from './Bindings';
import ShareLink from './ShareLink';
import SetupJson from './SetupJson';
import ClearSetup from './ClearSetup';

export default () => (
  <Grid>
    <PageHeader>noisebox <Gamepads /><ClearSetup /></PageHeader>
    <Error />
    <Row>
      <Col md={6}><MuteAll /><Components /><Connections /></Col>
      <Col md={6}><Deadzone /><Bindings /></Col>
    </Row>
    <Row>
      <Col md={12}><ShareLink /></Col>
    </Row>
    <Row>
      <Col md={12}><SetupJson /></Col>
    </Row>
  </Grid>
);
