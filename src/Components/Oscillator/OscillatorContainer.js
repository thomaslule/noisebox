import { connect } from 'react-redux';
import Oscillator from './Oscillator';
import { changeType, changeFrequency, changeToMaster, deleteOscillator } from './oscillatorActions';

const mapStateToProps = (state, ownProps) => ({
  component: ownProps.component,
});

const mapDispatchToProps = {
  onChangeType: changeType,
  onChangeFrequency: changeFrequency,
  onChangeToMaster: changeToMaster,
  onDelete: deleteOscillator,
};

export default connect(mapStateToProps, mapDispatchToProps)(Oscillator);
