import { connect } from 'react-redux';
import Oscillator from './Oscillator';
import { changeType, changeFrequency, changeToMaster } from './oscillatorActions';

const mapStateToProps = (state, ownProps) => ({
  type: ownProps.type,
  frequency: ownProps.frequency,
  toMaster: ownProps.toMaster,
});

const mapDispatchToProps = {
  onChangeType: changeType,
  onChangeFrequency: changeFrequency,
  onChangeToMaster: changeToMaster,
};

export default connect(mapStateToProps, mapDispatchToProps)(Oscillator);
