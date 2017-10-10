import { connect } from 'react-redux';
import GamepadMapping from './GamepadMapping';
import { addBinding } from './gamepadMappingActions';

const mapStateToProps = state => ({
  bindings: state.gamepadMapping,
});

const mapDispatchToProps = {
  addBinding,
};

export default connect(mapStateToProps, mapDispatchToProps)(GamepadMapping);
