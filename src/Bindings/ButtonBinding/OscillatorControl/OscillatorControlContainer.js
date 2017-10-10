import { connect } from 'react-redux';
import OscillatorControl from './OscillatorControl';
import { changeType, changeSetFrequencyParams } from './oscillatorControlActions';

const mapStateToProps = (state, ownProps) => ({
  button: ownProps.button,
  oscillator: ownProps.oscillator,
  type: state.bindings.find(b => b.button === ownProps.button).effect.type,
  params: state.bindings.find(b => b.button === ownProps.button).effect.params,
});

const mapDispatchToProps = {
  onChangeType: changeType,
  onChangeSetFrequencyParams: changeSetFrequencyParams,
};

export default connect(mapStateToProps, mapDispatchToProps)(OscillatorControl);
