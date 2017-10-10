import { connect } from 'react-redux';
import Oscillator from './Oscillator';
import { changeType, changeFrequency, changeConnectTo, deleteOscillator } from './oscillatorActions';

const mapStateToProps = (state, ownProps) => ({
  component: ownProps.component,
  otherComponents: state.components
    .filter(c => c.type === 'filter')
    .map(c => c.id),
});

const mapDispatchToProps = {
  onChangeType: changeType,
  onChangeFrequency: changeFrequency,
  onChangeConnectTo: changeConnectTo,
  onDelete: deleteOscillator,
};

export default connect(mapStateToProps, mapDispatchToProps)(Oscillator);
