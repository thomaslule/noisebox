import { connect } from 'react-redux';
import Filter from './Filter';
import { changeType, changeFrequency, changeToMaster, deleteOscillator } from './filterActions';

const mapStateToProps = (state, ownProps) => ({
  component: ownProps.component,
});

const mapDispatchToProps = {
  onChangeType: changeType,
  onChangeFrequency: changeFrequency,
  onChangeToMaster: changeToMaster,
  onDelete: deleteOscillator,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
