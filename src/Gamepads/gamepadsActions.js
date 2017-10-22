export const gamepadsConnected = gamepad => ({
  type: 'GAMEPADS_CONNECTED',
  id: gamepad.index + 1,
  gamepad,
});

export const gamepadsDisconnected = gamepad => ({
  type: 'GAMEPADS_DISCONNECTED',
  id: gamepad.index + 1,
  gamepad,
});
