export const changeParam = (component, param, value) => ({
  type: 'COMPONENT_CHANGE_PARAM',
  component,
  param,
  value,
});

export const changeConnectTo = (component, value) => ({
  type: 'COMPONENT_CHANGE_CONNECT_TO',
  component,
  value,
});

export const remove = component => ({
  type: 'COMPONENT_DELETE',
  component,
});
