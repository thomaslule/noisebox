export const changeComponent = (button, component) => ({
  type: 'BINDING_CHANGE_COMPONENT',
  button,
  component,
});

export const deleteBinding = button => ({
  type: 'DELETE_BINDING',
  button,
});
