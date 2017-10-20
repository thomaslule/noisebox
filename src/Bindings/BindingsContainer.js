import { connect } from 'react-redux';
import Bindings from './Bindings';
import { addBinding } from './bindingsActions';
import { getAll } from './../actionsDictionary';

const mapStateToProps = state => ({
  bindings: state.bindings,
  actions: getAll(),
});

const mapDispatchToProps = {
  addBinding,
};

export default connect(mapStateToProps, mapDispatchToProps)(Bindings);
