import { connect } from 'react-redux';
import Component from './Component';
import { changeParam, changeConnectTo, remove } from './componentActions';
import { get } from '../componentsDictionary';

const mapStateToProps = (state, { component }) => ({
  component,
  paramFields: get(component.type).params,
  connectToComponents: state.components
    .filter(c => c.id !== component.id)
    .filter(c => get(c.type).hasInput)
    .map(c => c.id),
});

const mapDispatchToProps = (dispatch, { component }) => ({
  onChangeParam: (param, value) => dispatch(changeParam(component.id, param, value)),
  onChangeConnectTo: value => dispatch(changeConnectTo(component.id, value)),
  onDelete: () => dispatch(remove(component.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
