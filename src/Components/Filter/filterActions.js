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

export const changeConnectTo = (id, value) => ({
  type: 'FILTER_CHANGE_CONNECT_TO',
  id,
  value,
});

export const deleteOscillator = id => ({
  type: 'FILTER_DELETE',
  id,
});
