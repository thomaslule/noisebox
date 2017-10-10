import { connect } from 'react-redux';
import { changeStateJson } from './stateJsonActions';
import StateJson from './StateJson';

const mapStateToProps = state => ({
  state: JSON.stringify(state),
});

const mapDispatchToProps = {
  onChange: changeStateJson,
};

export default connect(mapStateToProps, mapDispatchToProps)(StateJson);
