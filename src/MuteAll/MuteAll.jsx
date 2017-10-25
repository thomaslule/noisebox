import React from 'react';
import { Panel, Form } from 'react-bootstrap';
import { Button } from '../Shared';

export default ({ muted, muteAllSwitch }) => (
  <Panel header="Mute master">
    <Form horizontal onSubmit={e => e.preventDefault()}>
      <Button onClick={() => muteAllSwitch()} text={muted ? 'Unmute' : 'Mute'} />
    </Form>
  </Panel>
);
