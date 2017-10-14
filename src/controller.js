const buttonsDic = [
  { index: 0, name: 'A' },
  { index: 1, name: 'B' },
  { index: 2, name: 'X' },
  { index: 3, name: 'Y' },
  { index: 4, name: 'LB' },
  { index: 5, name: 'RB' },
  { index: 8, name: 'BACK' },
  { index: 9, name: 'START' },
  { index: 10, name: 'LSTICK' },
  { index: 11, name: 'RSTICK' },
  { index: 12, name: 'PAD_UP' },
  { index: 13, name: 'PAD_DOWN' },
  { index: 14, name: 'PAD_LEFT' },
  { index: 15, name: 'PAD_RIGHT' },
];

const previousButtonsState = buttonsDic.map(button => ({ index: button.index, pressed: false }));

let buttonsCallbacks = buttonsDic.map(button => (
  { index: button.index, onPress: [], onRelease: [] }
));

const axisDic = [
  { index: 0, name: 'LSTICK_X' },
  { index: 1, name: 'LSTICK_Y' },
  { index: 2, name: 'RSTICK_X' },
  { index: 3, name: 'RSTICK_Y' },
];

const previousAxisState = axisDic.map(axis => ({ index: axis.index, value: 0 }));

let axisCallbacks = axisDic.map(axis => (
  { index: axis.index, onMove: [] }
));

const triggersDic = [
  { index: 6, name: 'LT' },
  { index: 7, name: 'RT' },
];

const previousTriggersState = triggersDic.map(trigger => ({ index: trigger.index, value: 0 }));

let triggersCallbacks = triggersDic.map(trigger => (
  { index: trigger.index, onMove: [] }
));

const getFromIndex = (collection, index) => collection.find(entry => entry.index === index);
const getFromName = (collection, name) => collection.find(entry => entry.name === name);

const buttonPressed = (button) => {
  getFromIndex(buttonsCallbacks, button).onPress.forEach(callback => callback());
  getFromIndex(previousButtonsState, button).pressed = true;
};

const buttonReleased = (button) => {
  getFromIndex(buttonsCallbacks, button).onRelease.forEach(callback => callback());
  getFromIndex(previousButtonsState, button).pressed = false;
};

const updateButtonStatus = (button, pressed) => {
  if (getFromIndex(previousButtonsState, button).pressed !== pressed) {
    if (pressed) {
      buttonPressed(button);
    } else {
      buttonReleased(button);
    }
  }
};

const axisMoved = (axis, value) => {
  getFromIndex(axisCallbacks, axis).onMove.forEach(callback => callback(value));
  getFromIndex(previousAxisState, axis).value = value;
};

const updateAxisStatus = (axis, value) => {
  if (getFromIndex(previousAxisState, axis).value !== value) {
    axisMoved(axis, value);
  }
};

const triggerMoved = (trigger, value) => {
  getFromIndex(triggersCallbacks, trigger).onMove.forEach(callback => callback(value));
  getFromIndex(previousTriggersState, trigger).value = value;
};

const updateTriggerStatus = (trigger, value) => {
  if (getFromIndex(previousTriggersState, trigger).value !== value) {
    triggerMoved(trigger, value);
  }
};

const updateStatus = (gamepad) => {
  [0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15]
    .forEach(index => updateButtonStatus(index, gamepad.buttons[index].pressed));
  [0, 1, 2, 3]
    .forEach(index => updateAxisStatus(index, gamepad.axes[index].toFixed(2)));
  [6, 7]
    .forEach(index => updateTriggerStatus(index, gamepad.buttons[index].value.toFixed(2)));
};

const updateLoop = () => {
  const gamepad = navigator.getGamepads()[0];
  if (gamepad) {
    updateStatus(gamepad);
  }
  requestAnimationFrame(updateLoop);
};

export const onPress = (buttonName, callback) => {
  const buttonIndex = getFromName(buttonsDic, buttonName).index;
  getFromIndex(buttonsCallbacks, buttonIndex).onPress.push(callback);
};

export const onRelease = (buttonName, callback) => {
  const buttonIndex = getFromName(buttonsDic, buttonName).index;
  getFromIndex(buttonsCallbacks, buttonIndex).onRelease.push(callback);
};

export const onMove = (controlName, callback) => {
  if (axisDic.map(a => a.name).includes(controlName)) {
    const axisIndex = getFromName(axisDic, controlName).index;
    getFromIndex(axisCallbacks, axisIndex).onMove.push(callback);
  } else if (triggersDic.map(a => a.name).includes(controlName)) {
    const triggerIndex = getFromName(triggersDic, controlName).index;
    getFromIndex(triggersCallbacks, triggerIndex).onMove.push(callback);
  }
};

export const resetBindings = () => {
  buttonsCallbacks = buttonsCallbacks.map(binding => ({ ...binding, onPress: [], onRelease: [] }));
  axisCallbacks = axisCallbacks.map(binding => ({ ...binding, onMove: [] }));
  triggersCallbacks = triggersCallbacks.map(binding => ({ ...binding, onMove: [] }));
};

export const buttonsList = () => buttonsDic.map(dic => dic.name);

export const axisList = () => axisDic.map(dic => dic.name);

export const triggersList = () => triggersDic.map(dic => dic.name);

updateLoop();
