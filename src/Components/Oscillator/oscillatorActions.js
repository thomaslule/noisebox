export const changeType = (id, value) => ({
  type: 'OSCILLATOR_CHANGE_TYPE',
  id,
  value,
});

export const changeFrequency = (id, value) => ({
  type: 'OSCILLATOR_CHANGE_FREQUENCY',
  id,
  value,
});

export const changeConnectTo = (id, value) => ({
  type: 'OSCILLATOR_CHANGE_CONNECT_TO',
  id,
  value,
});

export const deleteOscillator = id => ({
  type: 'COMPONENT_DELETE',
  id,
});
