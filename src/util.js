export const getNextId = (obj) => {
  const ids = Object.keys(obj).length > 0 ? Object.keys(obj).map(id => Number(id)) : [0];
  const currentId = Math.max(...ids);
  return currentId + 1;
};
