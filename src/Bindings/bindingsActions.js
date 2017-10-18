import { newId } from './bindingsId';
import actionDefs from '../actionsDictionary';

export const addBinding = action => ({
  type: 'BINDING_ADD',
  bindingId: newId(),
  action,
  actionType: actionDefs.find(a => a.id === action).type,
});
