export const changeParam = (componentId, param, value) => ({
  type: 'COMPONENT_CHANGE_PARAM',
  componentId,
  param,
  value,
});

export const remove = id => ({
  type: 'COMPONENT_DELETE',
  id,
});
