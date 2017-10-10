import { connect } from 'react-redux';
import Bindings from './Bindings';
import { addBinding } from './bindingsActions';

const mapStateToProps = state => ({
  bindings: state.bindings,
});

const mapDispatchToProps = {
  addBinding,
};

export default connect(mapStateToProps, mapDispatchToProps)(Bindings);
