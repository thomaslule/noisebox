import { newId } from './bindingsId';
import { get } from '../actionsDictionary';

export const addBinding = action => ({
  type: 'BINDING_ADD',
  bindingId: newId(),
  action,
  actionType: get(action).type,
});
