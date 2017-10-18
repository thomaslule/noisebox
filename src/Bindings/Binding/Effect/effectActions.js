export const changeComponentId = (bindingId, effectId, componentId) => ({
  type: 'BINDING_EFFECT_CHANGE_COMPONENT_ID',
  bindingId,
  effectId,
  componentId,
});

export const changeEffectType = (bindingId, effectId, effectTypeId) => ({
  type: 'BINDING_EFFECT_CHANGE_EFFECT_TYPE',
  bindingId,
  effectId,
  effectTypeId,
});

export const changeParam = (bindingId, effectId, param, value) => ({
  type: 'BINDING_EFFECT_CHANGE_PARAM',
  bindingId,
  effectId,
  param,
  value,
});

export const remove = (bindingId, effectId) => ({
  type: 'BINDING_EFFECT_DELETE',
  bindingId,
  effectId,
});
