let id = 0;

const newId = () => {
  id += 1;
  return id;
};

export const addBinding = action => ({
  type: 'BINDING_ADD',
  id: newId(),
  action,
});
