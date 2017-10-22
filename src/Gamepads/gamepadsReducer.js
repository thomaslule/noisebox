import omit from 'lodash/omit';

const gamepadReducer = (state, action) => {
  if (action.type === 'GAMEPADS_CONNECTED') {
    return {
      id: action.id,
    };
  }
  return state;
};

export default (state = {}, action) => {
  if (action.type === 'GAMEPADS_DISCONNECTED') {
    return omit(state, action.id);
  }
  if (action.type.startsWith('GAMEPADS_')) {
    return {
      ...state,
      [action.id]: gamepadReducer(state[action.id], action),
    };
  }
  return state;
};

export const getAll = state => Object.values(state);
