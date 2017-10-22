import { connect } from 'react-redux';
import actions from '../actions';
import StateJson from './StateJson';

const mapStateToProps = state => ({
  stateJson: JSON.stringify(state),
});

export default connect(mapStateToProps, actions)(StateJson);
