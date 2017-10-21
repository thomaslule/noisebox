export const addAction = (bindingId, action) => ({
  type: 'BINDING_ACTION_ADD',
  bindingId,
  action,
});

export const deleteAction = (bindingId, action) => ({
  type: 'BINDING_ACTION_DELETE',
  bindingId,
  action,
});

export const remove = bindingId => ({
  type: 'BINDING_DELETE',
  bindingId,
});
