import { connect } from 'react-redux';
import OscillatorControl from './OscillatorControl';
import { changeType, changeParams } from './oscillatorControlActions';

const mapStateToProps = (state, ownProps) => ({
  button: ownProps.button,
  oscillator: ownProps.oscillator,
  type: state.bindings.find(b => b.button === ownProps.button).effect.type,
  params: state.bindings.find(b => b.button === ownProps.button).effect.params,
});

const mapDispatchToProps = {
  onChangeType: changeType,
  onChangeParams: changeParams,
};

export default connect(mapStateToProps, mapDispatchToProps)(OscillatorControl);
