import { connect } from 'react-redux';
import Oscillator from './Oscillator';
import { changeType, changeFrequency, changeToMaster } from './oscillatorActions';

const mapStateToProps = (state, ownProps) => ({
  component: ownProps.component,
});

const mapDispatchToProps = {
  onChangeType: changeType,
  onChangeFrequency: changeFrequency,
  onChangeToMaster: changeToMaster,
};

export default connect(mapStateToProps, mapDispatchToProps)(Oscillator);
