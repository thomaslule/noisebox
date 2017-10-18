import { connect } from 'react-redux';
import Binding from './Binding';
import { addAction, deleteAction, addEffect, remove } from './bindingActions';
import actions from './../../actionsDictionary';

const mapStateToProps = (state, { binding }) => {
  const availableActions = actions
    .filter(a => a.type === binding.actionType)
    .map(a => a.id)
    .filter(a => !binding.actions.includes(a));
  const canDeleteAction = binding.actions.length > 1;
  return ({
    binding,
    availableActions,
    canDeleteAction,
    allComponents: state.components.map(c => c.id),
  });
};

const mapDispatchToProps = (dispatch, { binding }) => ({
  onAddAction: action => dispatch(addAction(binding.id, action)),
  onDeleteAction: action => dispatch(deleteAction(binding.id, action)),
  onAddEffect: component => dispatch(addEffect(binding.id, component)),
  onDelete: () => dispatch(remove(binding.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Binding);
