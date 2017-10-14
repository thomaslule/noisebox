import { newId } from './bindingsId';

export const addBinding = action => ({
  type: 'BINDING_ADD',
  id: newId(),
  action,
});
