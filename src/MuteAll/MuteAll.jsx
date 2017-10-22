import React from 'react';
import { Button } from 'react-bootstrap';

export default ({ muted, muteAllSwitch }) =>
  <Button onClick={() => muteAllSwitch()} className="pull-right">{muted ? 'Unmute' : 'Mute'}</Button>;
