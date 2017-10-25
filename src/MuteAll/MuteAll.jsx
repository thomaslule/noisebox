import React from 'react';
import { Form } from 'react-bootstrap';
import { Button } from '../Shared';

export default ({ muted, muteAllSwitch }) => (
  <Form horizontal onSubmit={e => e.preventDefault()}>
    <Button onClick={() => muteAllSwitch()} label="Mute all" text={muted ? 'Unmute' : 'Mute'} />
  </Form>
);
