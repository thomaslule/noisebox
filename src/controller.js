const buttonsDic = [
  { index: 0, name: 'A' },
  { index: 1, name: 'B' },
  { index: 2, name: 'X' },
  { index: 3, name: 'Y' },
];

const previousButtonsState = buttonsDic.map(button => ({ index: button.index, pressed: false }));

const buttonsCallbacks = buttonsDic.map(button => (
  { index: button.index, onPress: [], onRelease: [] }
));

const axisDic = [
  { index: 0, name: 'LSTICK_X' },
  { index: 1, name: 'LSTICK_Y' },
  { index: 2, name: 'RSTICK_X' },
  { index: 3, name: 'RSTICK_Y' },
];

const previousAxisState = axisDic.map(axis => ({ index: axis.index, value: 0 }));

const axisCallbacks = axisDic.map(axis => (
  { index: axis.index, onMove: [] }
));

const triggersDic = [
  { index: 6, name: 'LT' },
  { index: 7, name: 'RT' },
];

const previousTriggersState = triggersDic.map(trigger => ({ index: trigger.index, value: 0 }));

const triggersCallbacks = triggersDic.map(trigger => (
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
  updateButtonStatus(0, gamepad.buttons[0].pressed);
  updateButtonStatus(1, gamepad.buttons[1].pressed);
  updateButtonStatus(2, gamepad.buttons[2].pressed);
  updateButtonStatus(3, gamepad.buttons[3].pressed);
  updateAxisStatus(0, gamepad.axes[0].toFixed(1));
  updateAxisStatus(1, gamepad.axes[1].toFixed(1));
  updateAxisStatus(2, gamepad.axes[2].toFixed(1));
  updateAxisStatus(3, gamepad.axes[3].toFixed(1));
  updateTriggerStatus(6, gamepad.buttons[6].value.toFixed(1));
  updateTriggerStatus(7, gamepad.buttons[7].value.toFixed(1));
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

export const onMoveStick = (axisName, callback) => {
  const axisIndex = getFromName(axisDic, axisName).index;
  getFromIndex(axisCallbacks, axisIndex).onMove.push(callback);
};

export const onMoveTrigger = (triggerName, callback) => {
  const triggerIndex = getFromName(triggersDic, triggerName).index;
  getFromIndex(triggersCallbacks, triggerIndex).onMove.push(callback);
};

updateLoop();
