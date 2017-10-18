import { connect } from 'react-redux';
import Effect from './Effect';
import { changeEffect, changeParam, remove } from './effectActions';
import { get, effectsFor } from '../../../effectsDictionary';

const mapStateToProps = (state, { effect, actionType }) => {
  const component = state.components.find(c => c.id === effect.componentId);
  const availableEffects = effectsFor(
    actionType,
    component.type,
  );
  return ({
    availableEffects: availableEffects.map(e => e.name),
    effect,
    paramFields: get(effect.effectId).params,
  });
};

const mapDispatchToProps = (dispatch, { effect, bindingId }) => ({
  onChangeEffect: effectType => dispatch(changeEffect(bindingId, effect.id, effectType)),
  onChangeParam: (param, value) => dispatch(changeParam(bindingId, effect.id, param, value)),
  onDelete: () => dispatch(remove(bindingId, effect.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Effect);
