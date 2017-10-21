export const connectionChangeFrom = (id, fromComponent) => ({
  type: 'CONNECTION_CHANGE_FROM',
  id,
  fromComponent,
});

export const connectionChangeTo = (id, toComponent, toInput) => ({
  type: 'CONNECTION_CHANGE_TO',
  id,
  toComponent,
  toInput,
});
