let id = 0;

export const addComponent = (componentType = 'oscillator') => {
  id += 1;
  return {
    type: 'COMPONENTS_ADD',
    id: `${componentType} ${id}`,
    componentType,
  };
};
