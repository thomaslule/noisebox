const gamepad = new window.Gamepad();

const buttons = {
  A: 'FACE_1',
  B: 'FACE_2',
  X: 'FACE_3',
  Y: 'FACE_4',
  LB: 'LEFT_TOP_SHOULDER',
  RB: 'RIGHT_TOP_SHOULDER',
  BACK: 'SELECT_BACK',
  START: 'START_FORWARD',
  LSTICK: 'LEFT_STICK',
  RSTICK: 'RIGHT_STICK',
  PAD_UP: 'DPAD_UP',
  PAD_DOWN: 'DPAD_DOWN',
  PAD_LEFT: 'DPAD_LEFT',
  PAD_RIGHT: 'DPAD_RIGHT',
};

const axis = {
  LSTICK_X: 'LEFT_STICK_X',
  LSTICK_Y: 'LEFT_STICK_Y',
  RSTICK_X: 'RIGHT_STICK_X',
  RSTICK_Y: 'RIGHT_STICK_Y',
  LT: 'LEFT_BOTTOM_SHOULDER',
  RT: 'RIGHT_BOTTOM_SHOULDER',
};

if (!gamepad.init()) {
  console.error('unsupported browser');
}

export const onPress = (buttonName, callback) => {
  gamepad.bind(Gamepad.Event.BUTTON_DOWN, (e) => {
    if (e.control === buttons[buttonName]) callback();
  });
};

export const onRelease = (buttonName, callback) => {
  gamepad.bind(Gamepad.Event.BUTTON_UP, (e) => {
    if (e.control === buttons[buttonName]) callback();
  });
};

export const onMove = (controlName, callback) => {
  gamepad.bind(Gamepad.Event.AXIS_CHANGED, (e) => {
    if (e.axis === axis[controlName]) callback(e.value);
  });
};

export const resetBindings = () => {
  gamepad.unbind();
};

export const buttonsList = () => Object.keys(buttons);

export const axisList = () => Object.keys(axis);
