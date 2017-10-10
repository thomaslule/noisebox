export const changeType = (button, value) => ({
  type: 'OSCILLATOR_CONTROL_CHANGE_TYPE',
  button,
  value,
});

export const changeSetFrequencyParams = (button, params) => ({
  type: 'OSCILLATOR_CONTROL_CHANGE_SET_FREQUENCY_PARAMS',
  button,
  params,
});
