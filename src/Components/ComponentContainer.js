import { connect } from 'react-redux';
import Component from './Component';
import { components } from '../reducer';
import actions from '../actions';
import { get } from '../componentTypesDictionary';

const mapStateToProps = (state, { id }) => ({
  component: components.getById(state, id),
  paramFields: get(components.getById(state, id).typeId).params,
});

export default connect(mapStateToProps, actions)(Component);
