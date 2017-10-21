import { connect } from 'react-redux';
import Component from './Component';
import { componentsGetById } from '../reducer';
import actions from '../actions';
import { get } from '../componentTypesDictionary';

const mapStateToProps = (state, { id }) => ({
  component: componentsGetById(state, id),
  paramFields: get(componentsGetById(state, id).typeId).params,
});

export default connect(mapStateToProps, actions)(Component);
