import { newId } from './connectionsId';

export const addConnection = (fromComponentId, toComponentId, toInput) => ({
  type: 'CONNECTION_ADD',
  connectionId: newId(),
  fromComponentId,
  toComponentId,
  toInput,
});

export const changeFrom = (connectionId, fromComponentId) => ({
  type: 'CONNECTION_CHANGE_FROM',
  connectionId,
  fromComponentId,
});

export const changeTo = (connectionId, toComponentId, toInput) => ({
  type: 'CONNECTION_CHANGE_TO',
  connectionId,
  toComponentId,
  toInput,
});

export const deleteConnection = connectionId => ({
  type: 'CONNECTION_DELETE',
  connectionId,
});
