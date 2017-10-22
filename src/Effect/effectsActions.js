import { effectGetNextId } from '../reducer';

export const effectAdd = (binding, actionType) => (dispatch, getState) => {
  dispatch({
    type: 'EFFECT_ADD',
    id: effectGetNextId(getState()),
    binding,
    actionType,
  });
};

export const effectDelete = id => ({
  type: 'EFFECT_DELETE',
  id,
});

export const effectChangeComponent = (id, component) => ({
  type: 'EFFECT_CHANGE_COMPONENT',
  id,
  component,
});

export const effectChangeEffectType = (id, effectType) => ({
  type: 'EFFECT_CHANGE_EFFECT_TYPE',
  id,
  effectType,
});

export const effectChangeParam = (id, param, value) => ({
  type: 'EFFECT_CHANGE_PARAM',
  id,
  param,
  value,
});
