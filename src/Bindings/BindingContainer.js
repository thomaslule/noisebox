import { connect } from 'react-redux';
import Binding from './Binding';
import { addAction, deleteAction, remove } from './bindingActions';
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
  });
};

const mapDispatchToProps = (dispatch, { binding }) => ({
  onAddAction: action => dispatch(addAction(binding.id, action)),
  onDeleteAction: action => dispatch(deleteAction(binding.id, action)),
  onAddEffect: () => dispatch(actions.effectAdd(binding.id, binding.actionType)),
  onDelete: () => dispatch(remove(binding.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Binding);
