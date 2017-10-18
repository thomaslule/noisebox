export const changeEffect = (bindingId, effectId, newEffect) => ({
  type: 'BINDING_EFFECT_CHANGE_EFFECT',
  binding: bindingId,
  effectId,
  newEffect,
});

export const changeParam = (bindingId, effectId, param, value) => ({
  type: 'BINDING_EFFECT_CHANGE_PARAM',
  binding: bindingId,
  effectId,
  param,
  value,
});

export const remove = (bindingId, effectId) => ({
  type: 'BINDING_EFFECT_DELETE',
  binding: bindingId,
  effectId,
});
