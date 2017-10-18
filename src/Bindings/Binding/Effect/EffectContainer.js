import { connect } from 'react-redux';
import Effect from './Effect';
import { changeEffectType, changeParam, remove } from './effectActions';
import { get, effectTypesFor } from '../../../effectTypesDictionary';

const mapStateToProps = (state, { effect, actionType }) => {
  const component = state.components.find(c => c.id === effect.componentId);
  const availableEffectTypes = effectTypesFor(
    actionType,
    component.typeId,
  );
  return ({
    availableEffectTypeIds: availableEffectTypes.map(e => e.id),
    effect,
    paramFields: get(effect.effectTypeId).params,
  });
};

const mapDispatchToProps = (dispatch, { effect, bindingId }) => ({
  onChangeEffectType: effectTypeId => dispatch(changeEffectType(bindingId, effect.id, effectTypeId)),
  onChangeParam: (param, value) => dispatch(changeParam(bindingId, effect.id, param, value)),
  onDelete: () => dispatch(remove(bindingId, effect.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Effect);
