let id = 0;

export const newId = () => {
  id += 1;
  return id;
};

export const setCurrentId = (current) => {
  id = current;
};
