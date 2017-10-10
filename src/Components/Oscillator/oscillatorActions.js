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

export const changeToMaster = (id, value) => ({
  type: 'OSCILLATOR_CHANGE_TO_MASTER',
  id,
  value,
});

export const deleteOscillator = id => ({
  type: 'COMPONENT_DELETE',
  id,
});
