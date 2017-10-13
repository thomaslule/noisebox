import React from 'react';
import { connect } from 'react-redux';
import Binding from './Binding';
import { changeComponent, changeEffect, changeParam, remove } from './bindingActions';
import { effectsFor } from './effectsDictionary';

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
  const componentDef = state.components.find(c => c.id === ownProps.component);
  const availableEffects = effectsFor(
    ownProps.action,
    componentDef ? componentDef.type : 'none',
  );
  const shouldSetEffect = ownProps.component !== 'none'
    && ownProps.effect === 'none'
    && availableEffects.length > 0;
  return ({
    ...ownProps,
    components: state.components.map(c => c.id),
    availableEffects: availableEffects.map(e => e.name),
    shouldSetEffect,
  });
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChangeComponent: component => dispatch(changeComponent(
    ownProps.id,
    component,
  )),
  onChangeEffect: effect => dispatch(changeEffect(ownProps.id, effect)),
  onChangeParam: (param, value) => dispatch(changeParam(ownProps.id, param, value)),
  onDelete: () => dispatch(remove(ownProps.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BindingWrap);
