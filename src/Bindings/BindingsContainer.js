import { connect } from 'react-redux';
import Bindings from './Bindings';
import { addBinding } from './bindingsActions';
import actionDefs from './../actionsDictionary';

const mapStateToProps = state => ({
  bindings: state.bindings,
  actions: actionDefs.map(a => a.id),
});

const mapDispatchToProps = {
  addBinding,
};

export default connect(mapStateToProps, mapDispatchToProps)(Bindings);
