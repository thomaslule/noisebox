import { connect } from 'react-redux';
import Binding from './Binding';
import { addAction, deleteAction, addEffect, remove } from './bindingActions';
import actionDefs from './../../actionsDictionary';

const mapStateToProps = (state, { binding }) => {
  const availableActions = actionDefs
    .filter(a => a.type === binding.actionType)
    .map(a => a.id)
    .filter(a => !binding.actions.includes(a));
  const canDeleteAction = binding.actions.length > 1;
  return ({
    binding,
    availableActions,
    canDeleteAction,
    allComponentIds: state.components.map(c => c.id),
  });
};

const mapDispatchToProps = (dispatch, { binding }) => ({
  onAddAction: action => dispatch(addAction(binding.id, action)),
  onDeleteAction: action => dispatch(deleteAction(binding.id, action)),
  onAddEffect: componentId => dispatch(addEffect(binding.id, componentId)),
  onDelete: () => dispatch(remove(binding.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Binding);
