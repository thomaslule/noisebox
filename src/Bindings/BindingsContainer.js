import { connect } from 'react-redux';
import Bindings from './Bindings';
import { bindings } from '../reducer';
import actions from '../actions';
import { getAll } from './../actionsDictionary';

const mapStateToProps = state => ({
  bindings: bindings.getAll(state),
  actions: getAll(),
});

export default connect(mapStateToProps, actions)(Bindings);
