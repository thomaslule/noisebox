import { connect } from 'react-redux';
import Effect from './Effect';
import actions from '../actions';
import { effects, components } from '../reducer';
import { get, effectTypesFor } from '../effectTypesDictionary';

const mapStateToProps = (state, { id }) => {
  const effect = effects.getById(state, id);
  const component = components.getById(state, effect.component) || { typeId: 'none' };
  const availableEffectTypes = effectTypesFor(
    effect.actionType,
    component.typeId,
  );
  return ({
    effect,
    availableEffectTypeIds: availableEffectTypes.map(e => e.id),
    paramFields: get(effect.effectType).params,
    allComponentIds: ['none'].concat(components.getAll(state).map(c => c.id)),
  });
};

export default connect(mapStateToProps, actions)(Effect);
