export const changeType = (button, value) => ({
  type: 'FILTER_CONTROL_CHANGE_TYPE',
  button,
  value,
});

export const changeParams = (button, params) => ({
  type: 'FILTER_CONTROL_CHANGE_PARAMS',
  button,
  params,
});
