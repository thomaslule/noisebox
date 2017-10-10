import React from 'react';
import { Button } from 'react-bootstrap';

export default props => <Button onClick={() => props.switchMute()} className="pull-right">{props.muted ? 'Unmute' : 'Mute'}</Button>;
