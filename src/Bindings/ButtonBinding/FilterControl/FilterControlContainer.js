import { connect } from 'react-redux';
import FilterControl from './FilterControl';
import { changeType, changeParams } from './filterControlActions';

const mapStateToProps = (state, ownProps) => ({
  button: ownProps.button,
  type: state.bindings.find(b => b.button === ownProps.button).effect.type,
  params: state.bindings.find(b => b.button === ownProps.button).effect.params,
});

const mapDispatchToProps = {
  onChangeType: changeType,
  onChangeParams: changeParams,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterControl);
