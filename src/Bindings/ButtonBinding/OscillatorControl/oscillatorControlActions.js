export const changeType = (button, value) => ({
  type: 'OSCILLATOR_CONTROL_CHANGE_TYPE',
  button,
  value,
});

export const changeParams = (button, params) => ({
  type: 'OSCILLATOR_CONTROL_CHANGE_PARAMS',
  button,
  params,
});
