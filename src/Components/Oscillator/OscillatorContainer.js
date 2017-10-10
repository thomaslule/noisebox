import { connect } from 'react-redux';
import Oscillator from './Oscillator';
import { changeType, changeFrequency, changeToMaster } from './oscillatorActions';

const mapStateToProps = (state, ownProps) => ({
  id: ownProps.id,
  type: state.components.find(c => c.id === ownProps.id).params.type,
  frequency: state.components.find(c => c.id === ownProps.id).params.frequency,
  toMaster: state.components.find(c => c.id === ownProps.id).params.toMaster,
});

const mapDispatchToProps = {
  onChangeType: changeType,
  onChangeFrequency: changeFrequency,
  onChangeToMaster: changeToMaster,
};

export default connect(mapStateToProps, mapDispatchToProps)(Oscillator);
