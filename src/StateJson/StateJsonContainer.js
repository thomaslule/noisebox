import { connect } from 'react-redux';
import { stateJsonGet } from '../reducer';
import actions from '../actions';
import StateJson from './StateJson';

const mapStateToProps = state => ({
  stateJson: JSON.stringify(stateJsonGet(state)),
});

export default connect(mapStateToProps, actions)(StateJson);
