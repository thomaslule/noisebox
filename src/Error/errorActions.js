export const errorShow = (error) => {
  console.error(error);
  return {
    type: 'ERROR_SHOW',
    error,
  };
};

export const errorHide = () => ({
  type: 'ERROR_HIDE',
});
