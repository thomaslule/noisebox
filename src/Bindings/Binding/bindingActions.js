import { newId } from './effectsId';

export const addAction = (binding, action) => ({
  type: 'BINDING_ACTION_ADD',
  binding,
  action,
});

export const deleteAction = (binding, action) => ({
  type: 'BINDING_ACTION_DELETE',
  binding,
  action,
});

export const addEffect = (binding, component) => ({
  type: 'BINDING_EFFECT_ADD',
  id: newId(),
  binding,
  component,
});

export const remove = binding => ({
  type: 'BINDING_DELETE',
  binding,
});
