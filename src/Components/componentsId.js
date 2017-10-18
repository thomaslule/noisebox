import { getAll } from '../componentTypesDictionary';

let ids = getAll().map(c => ({
  componentTypeId: c.id,
  currentId: 0,
}));

export const newId = (componentTypeId) => {
  ids = ids.map(c =>
    (c.componentTypeId === componentTypeId ? { ...c, currentId: c.currentId + 1 } : c));
  return ids.find(c => c.componentTypeId === componentTypeId).currentId;
};

export const setCurrentId = (componentTypeId, currentId) => {
  ids = ids.map(c => (c.componentTypeId === componentTypeId ? { ...c, currentId } : c));
};
