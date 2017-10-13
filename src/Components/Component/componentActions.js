export const changeParam = (component, param, value) => ({
  type: 'COMPONENT_CHANGE_PARAM',
  component,
  param,
  value,
});

export const remove = component => ({
  type: 'COMPONENT_DELETE',
  component,
});
