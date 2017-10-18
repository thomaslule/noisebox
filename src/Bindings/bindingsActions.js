import { newId } from './bindingsId';
import actions from '../actionsDictionary';

export const addBinding = action => ({
  type: 'BINDING_ADD',
  id: newId(),
  action,
  actionType: actions.find(a => a.id === action).type,
});
