export const errorShow = (error) => {
  console.error(error);
  return {
    type: 'ERROR_SHOW',
    error: error.message,
  };
};

export const errorHide = () => ({
  type: 'ERROR_HIDE',
});
