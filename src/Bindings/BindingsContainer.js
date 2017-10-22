import { connect } from 'react-redux';
import Bindings from './Bindings';
import { bindingsGetAll } from '../reducer';
import actions from '../actions';
import { getAll } from './../actionsDictionary';

const mapStateToProps = state => ({
  bindings: bindingsGetAll(state),
  actions: getAll(),
});

export default connect(mapStateToProps, actions)(Bindings);
