let id = 0;

export const addComponent = () => {
  id += 1;
  return {
    type: 'COMPONENTS_ADD',
    id: `oscillator ${id}`,
  };
};
