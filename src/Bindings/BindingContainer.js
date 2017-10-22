import { connect } from 'react-redux';
import Binding from './Binding';
import { effects } from '../reducer';
import actions from '../actions';
import { getAll } from './../actionsDictionary';

const mapStateToProps = (state, { binding }) => {
  const availableActions = getAll()
    .filter(a => a.type === binding.actionType)
    .filter(a => !binding.actions.includes(a.id));
  const canDeleteAction = binding.actions.length > 1;
  return ({
    binding,
    availableActions,
    canDeleteAction,
    effects: effects.getByBinding(state, binding.id).map(e => e.id),
  });
};

export default connect(mapStateToProps, actions)(Binding);
