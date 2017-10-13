import { connect } from 'react-redux';
import Component from './Component';
import { changeParam, changeConnectTo, remove } from './componentActions';
import { get } from '../componentsDictionary';

const mapStateToProps = (state, ownProps) => ({
  component: ownProps.component,
  paramFields: get(ownProps.component.type).params,
  connectToComponents: state.components
    .filter(c => c.id !== ownProps.component.id)
    .filter(c => get(c.type).hasInput)
    .map(c => c.id),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChangeParam: (param, value) => dispatch(changeParam(ownProps.component.id, param, value)),
  onChangeConnectTo: value => dispatch(changeConnectTo(ownProps.component.id, value)),
  onDelete: () => dispatch(remove(ownProps.component.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
