export const getNextId = (obj) => {
  const ids = Object.keys(obj).length > 0 ? Object.keys(obj).map(id => Number(id)) : [0];
  const currentId = Math.max(...ids);
  return currentId + 1;
};

export const reExport = (exportsObject, ...pathInState) => {
  const toExport = {};
  Object.keys(exportsObject)
    .filter(exportName => exportName !== 'default')
    .forEach((exportName) => {
      toExport[exportName] = (state, ...args) => {
        let where = state;
        pathInState.forEach((key) => { where = where[key]; });
        return exportsObject[exportName](where, ...args);
      };
    });
  return toExport;
};
