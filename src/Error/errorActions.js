export const errorAction = (error) => {
  console.error(error);
  return {
    type: 'ERROR',
    error,
  };
};

export const noErrorAction = () => ({
  type: 'NO_ERROR',
});
