import { connect } from 'react-redux';
import Effect from './Effect';
import actions from '../actions';
import { effectGetById, componentsGetById, componentsGetAll } from '../reducer';
import { get, effectTypesFor } from '../effectTypesDictionary';

const mapStateToProps = (state, { id }) => {
  const effect = effectGetById(state, id);
  const component = componentsGetById(state, effect.component) || { typeId: 'none' };
  const availableEffectTypes = effectTypesFor(
    effect.actionType,
    component.typeId,
  );
  return ({
    effect,
    availableEffectTypeIds: availableEffectTypes.map(e => e.id),
    paramFields: get(effect.effectType).params,
    allComponentIds: ['none'].concat(componentsGetAll(state).map(c => c.id)),
  });
};

export default connect(mapStateToProps, actions)(Effect);
