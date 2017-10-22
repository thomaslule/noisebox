export const getNextId = (obj) => {
  const ids = Object.keys(obj).length > 0 ? Object.keys(obj).map(id => Number(id)) : [0];
  const currentId = Math.max(...ids);
  return currentId + 1;
};

export const reExport = (from, applyTo) => {
  const toExport = {};
  Object.keys(from)
    .filter(f => f !== 'default')
    .forEach((f) => {
      toExport[f] = (state, ...args) => from[f](state[applyTo], ...args);
    });
  return toExport;
};
