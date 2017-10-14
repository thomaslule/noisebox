import { getAll } from '../componentsDictionary';

let ids = getAll().map(c => ({
  name: c.name,
  currentId: 0,
}));

export const newId = (componentType) => {
  ids = ids.map(c => (c.name === componentType ? { ...c, currentId: c.currentId + 1 } : c));
  return ids.find(c => c.name === componentType).currentId;
};

export const setCurrentId = (componentType, currentId) => {
  ids = ids.map(c => (c.name === componentType ? { ...c, currentId } : c));
};
