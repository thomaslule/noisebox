import { connect } from 'react-redux';
import Deadzone from './Deadzone';
import actions from '../actions';
import { deadzone } from '../reducer';

const mapStateToProps = state => ({
  deadzone: deadzone.get(state),
});

export default connect(mapStateToProps, actions)(Deadzone);
