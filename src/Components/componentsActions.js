let oscillatorId = 1;
let filterId = 1;

export const addComponent = (componentType) => {
  let id;
  if (componentType === 'oscillator') {
    id = oscillatorId;
    oscillatorId += 1;
  }
  if (componentType === 'filter') {
    id = filterId;
    filterId += 1;
  }
  return {
    type: 'COMPONENTS_ADD',
    id: `${componentType} ${id}`,
    componentType,
  };
};
