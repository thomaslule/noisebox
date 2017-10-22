const cloneDeep = require('lodash/cloneDeep');

const gamepad = new window.Gamepad();

const buttons = [
  { standard: 'FACE_1', xbox360: 'A' },
  { standard: 'FACE_2', xbox360: 'B' },
  { standard: 'FACE_3', xbox360: 'X' },
  { standard: 'FACE_4', xbox360: 'Y' },
  { standard: 'LEFT_TOP_SHOULDER', xbox360: 'LB' },
  { standard: 'RIGHT_TOP_SHOULDER', xbox360: 'RB' },
  { standard: 'SELECT_BACK', xbox360: 'BACK' },
  { standard: 'START_FORWARD', xbox360: 'START' },
  { standard: 'LEFT_STICK', xbox360: 'LSTICK' },
  { standard: 'RIGHT_STICK', xbox360: 'RSTICK' },
  { standard: 'DPAD_UP', xbox360: 'PAD_UP' },
  { standard: 'DPAD_DOWN', xbox360: 'PAD_DOWN' },
  { standard: 'DPAD_LEFT', xbox360: 'PAD_LEFT' },
  { standard: 'DPAD_RIGHT', xbox360: 'PAD_RIGHT' },
];

const axis = [
  { standard: 'LEFT_STICK_X', xbox360: 'LSTICK_X' },
  { standard: 'LEFT_STICK_Y', xbox360: 'LSTICK_Y' },
  { standard: 'RIGHT_STICK_X', xbox360: 'RSTICK_X' },
  { standard: 'RIGHT_STICK_Y', xbox360: 'RSTICK_Y' },
  { standard: 'LEFT_BOTTOM_SHOULDER', xbox360: 'LT' },
  { standard: 'RIGHT_BOTTOM_SHOULDER', xbox360: 'RT' },
];

if (!gamepad.init()) {
  console.error('unsupported browser');
}

gamepad.deadzone = 0.1;

export const onPress = (buttonName, callback) => {
  gamepad.bind(Gamepad.Event.BUTTON_DOWN, (e) => {
    if (e.control === buttonName) callback();
  });
};

export const onRelease = (buttonName, callback) => {
  gamepad.bind(Gamepad.Event.BUTTON_UP, (e) => {
    if (e.control === buttonName) callback();
  });
};

export const onMove = (controlName, callback) => {
  gamepad.bind(Gamepad.Event.AXIS_CHANGED, (e) => {
    if (e.axis === controlName) callback(e.value);
  });
};

let onConnectHandler;
let onDisconnectHandler;

export const onConnect = (callback) => {
  onConnectHandler = callback;
};

export const onDisconnect = (callback) => {
  onDisconnectHandler = callback;
};

export const resetBindings = () => {
  gamepad.unbind();
  gamepad.bind(Gamepad.Event.CONNECTED, onConnectHandler);
  gamepad.bind(Gamepad.Event.DISCONNECTED, onDisconnectHandler);
};

export const buttonsList = () => cloneDeep(buttons);

export const axisList = () => cloneDeep(axis);

resetBindings();
