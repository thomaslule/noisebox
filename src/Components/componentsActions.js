let id = 0;

export const addComponent = () => ({
  type: 'COMPONENTS_ADD',
  id: `oscillator ${id++}`,
});
