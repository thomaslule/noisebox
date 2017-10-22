import { connect } from 'react-redux';
import { setupJson } from '../reducer';
import actions from '../actions';
import SetupJson from './SetupJson';

const mapStateToProps = state => ({
  stateJson: JSON.stringify(setupJson.get(state)),
});

export default connect(mapStateToProps, actions)(SetupJson);
