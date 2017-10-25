import React from 'react';
import { Badge } from 'react-bootstrap';

const Gamepad = ({ id }) =>
  <span><span role="img" aria-label="gamepad">🎮</span><Badge>{id}</Badge></span>;

export default ({
  gamepads,
}) => {
  if (gamepads.length > 0) {
    return <small>{gamepads.map(g => <Gamepad key={g.id} id={g.id} />)}</small>;
  }
  return <small>Plug-in your gamepads</small>;
};
