import { connect } from 'react-redux';
import Bindings from './Bindings';
import { addBinding } from './bindingsActions';
import actions from './actionsDictionary';

const mapStateToProps = state => ({
  bindings: state.bindings,
  actions: actions.map(a => a.id),
});

const mapDispatchToProps = {
  addBinding,
};

export default connect(mapStateToProps, mapDispatchToProps)(Bindings);
