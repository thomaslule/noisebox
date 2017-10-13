let id = 0;

const newId = () => {
  id += 1;
  return id;
};

export const addConnection = (fromComponent, toComponent, toInput) => ({
  type: 'CONNECTION_ADD',
  id: newId(),
  fromComponent,
  toComponent,
  toInput,
});

export const changeFrom = (connectionId, fromComponent) => ({
  type: 'CONNECTION_CHANGE_FROM',
  connectionId,
  fromComponent,
});

export const changeTo = (connectionId, toComponent, toInput) => ({
  type: 'CONNECTION_CHANGE_TO',
  connectionId,
  toComponent,
  toInput,
});

export const deleteConnection = connectionId => ({
  type: 'CONNECTION_DELETE',
  connectionId,
});
