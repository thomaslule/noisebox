import { connect } from 'react-redux';
import Component from './Component';
import { componentsGetById } from '../reducer';
import { changeParam, remove } from './componentActions';
import { get } from '../componentTypesDictionary';

const mapStateToProps = (state, { id }) => ({
  component: componentsGetById(state, id),
  paramFields: get(componentsGetById(state, id).typeId).params,
});

const mapDispatchToProps = (dispatch, { component }) => ({
  onChangeParam: (param, value) => dispatch(changeParam(component.id, param, value)),
  onDelete: () => dispatch(remove(component.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
