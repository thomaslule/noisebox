export const changeParam = (componentId, param, value) => ({
  type: 'COMPONENT_CHANGE_PARAM',
  componentId,
  param,
  value,
});

export const remove = componentId => ({
  type: 'COMPONENT_DELETE',
  componentId,
});
