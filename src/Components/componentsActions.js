import { getAll } from './componentsDictionary';

let ids = getAll().map(c => ({
  name: c.name,
  currentId: 0,
}));

export const addComponent = (componentType) => {
  ids = ids.map(c => (c.name === componentType ? { ...c, currentId: c.currentId + 1 } : c));
  return {
    type: 'COMPONENT_ADD',
    id: `${componentType} ${ids.find(c => c.name === componentType).currentId}`,
    componentType,
  };
};
