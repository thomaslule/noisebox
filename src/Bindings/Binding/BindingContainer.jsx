import React from 'react';
import { connect } from 'react-redux';
import Binding from './Binding';
import { changeComponent, changeEffect, changeParam, remove } from './bindingActions';
import { get, effectsFor } from './effectsDictionary';

class BindingWrap extends React.Component {
  componentDidMount() {
    if (this.props.shouldSetEffect) {
      this.props.onChangeEffect(this.props.availableEffects[0]);
    }
  }

  componentDidUpdate() {
    if (this.props.shouldSetEffect) {
      this.props.onChangeEffect(this.props.availableEffects[0]);
    }
  }

  render() {
    return <Binding {...this.props} />;
  }
}

const mapStateToProps = (state, { binding }) => {
  const componentDef = state.components.find(c => c.id === binding.component);
  const availableEffects = effectsFor(
    binding.action,
    componentDef ? componentDef.type : 'none',
  );
  const shouldSetEffect = binding.component !== 'none'
    && binding.effect === 'none'
    && availableEffects.length > 0;
  return ({
    binding,
    components: state.components.map(c => c.id),
    availableEffects: availableEffects.map(e => e.name),
    shouldSetEffect,
    paramFields: binding.effect !== 'none' ? get(binding.effect).params : [],
  });
};

const mapDispatchToProps = (dispatch, { binding }) => ({
  onChangeComponent: component => dispatch(changeComponent(
    binding.id,
    component,
  )),
  onChangeEffect: effect => dispatch(changeEffect(binding.id, effect)),
  onChangeParam: (param, value) => dispatch(changeParam(binding.id, param, value)),
  onDelete: () => dispatch(remove(binding.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BindingWrap);
