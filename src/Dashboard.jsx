import React from 'react';
import { PageHeader, Grid, Row, Col, Panel } from 'react-bootstrap';
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

const Options = () => (
  <Panel header="Options">
    <Deadzone />
    <MuteAll />
    <ClearSetup />
  </Panel>
);

const Share = () => (
  <Panel header="Share">
    <ShareLink />
    <SetupJson />
  </Panel>
);

export default () => (
  <Grid>
    <PageHeader>noisebox <Gamepads /></PageHeader>
    <Error />
    <Row>
      <Col md={6}><Options /><Components /><Connections /></Col>
      <Col md={6}><Bindings /></Col>
    </Row>
    <Row>
      <Col md={12}><Share /></Col>
    </Row>
  </Grid>
);
