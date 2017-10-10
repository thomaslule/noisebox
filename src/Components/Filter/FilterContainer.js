import { connect } from 'react-redux';
import Filter from './Filter';
import { changeType, changeFrequency, changeConnectTo, deleteOscillator } from './filterActions';

const mapStateToProps = (state, ownProps) => ({
  component: ownProps.component,
  otherComponents: state.components
    .filter(c => c.id !== ownProps.component.id && c.type === 'filter')
    .map(c => c.id),
});

const mapDispatchToProps = {
  onChangeType: changeType,
  onChangeFrequency: changeFrequency,
  onChangeConnectTo: changeConnectTo,
  onDelete: deleteOscillator,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
