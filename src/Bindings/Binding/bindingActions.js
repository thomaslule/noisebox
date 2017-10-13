export const changeComponent = (binding, component) => ({
  type: 'BINDING_CHANGE_COMPONENT',
  binding,
  component,
});

export const changeEffect = (binding, effect) => ({
  type: 'BINDING_CHANGE_EFFECT',
  binding,
  effect,
});

export const changeParam = (binding, param, value) => ({
  type: 'BINDING_CHANGE_PARAM',
  binding,
  param,
  value,
});

export const remove = binding => ({
  type: 'BINDING_DELETE',
  binding,
});
