export const changeType = (id, value) => ({
  type: 'FILTER_CHANGE_TYPE',
  id,
  value,
});

export const changeFrequency = (id, value) => ({
  type: 'FILTER_CHANGE_FREQUENCY',
  id,
  value,
});

export const changeToMaster = (id, value) => ({
  type: 'FILTER_CHANGE_TO_MASTER',
  id,
  value,
});

export const deleteOscillator = id => ({
  type: 'FILTER_DELETE',
  id,
});
