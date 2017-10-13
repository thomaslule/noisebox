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

const mapStateToProps = (state, ownProps) => {
  const componentDef = state.components.find(c => c.id === ownProps.binding.component);
  const availableEffects = effectsFor(
    ownProps.binding.action,
    componentDef ? componentDef.type : 'none',
  );
  const shouldSetEffect = ownProps.binding.component !== 'none'
    && ownProps.binding.effect === 'none'
    && availableEffects.length > 0;
  return ({
    binding: ownProps.binding,
    components: state.components.map(c => c.id),
    availableEffects: availableEffects.map(e => e.name),
    shouldSetEffect,
    paramFields: ownProps.binding.effect !== 'none' ? get(ownProps.binding.effect).params : [],
  });
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChangeComponent: component => dispatch(changeComponent(
    ownProps.binding.id,
    component,
  )),
  onChangeEffect: effect => dispatch(changeEffect(ownProps.binding.id, effect)),
  onChangeParam: (param, value) => dispatch(changeParam(ownProps.binding.id, param, value)),
  onDelete: () => dispatch(remove(ownProps.binding.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BindingWrap);
