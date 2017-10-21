import { connect } from 'react-redux';
import Effect from './Effect';
import { componentsGetById, componentsGetAll } from '../../../reducer';
import { changeComponentId, changeEffectType, changeParam, remove } from './effectActions';
import { get, effectTypesFor } from '../../../effectTypesDictionary';

const mapStateToProps = (state, { effect, actionType }) => {
  const component = componentsGetById(state, effect.componentId) || { typeId: 'none' };
  const availableEffectTypes = effectTypesFor(
    actionType,
    component.typeId,
  );
  return ({
    availableEffectTypeIds: availableEffectTypes.map(e => e.id),
    effect,
    paramFields: get(effect.effectTypeId).params,
    allComponentIds: ['none'].concat(componentsGetAll(state).map(c => c.id)),
  });
};

const mapDispatchToProps = (dispatch, { effect, bindingId }) => ({
  onChangeComponentId: componentId =>
    dispatch(changeComponentId(bindingId, effect.id, componentId)),
  onChangeEffectType: effectTypeId =>
    dispatch(changeEffectType(bindingId, effect.id, effectTypeId)),
  onChangeParam: (param, value) => dispatch(changeParam(bindingId, effect.id, param, value)),
  onDelete: () => dispatch(remove(bindingId, effect.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Effect);
