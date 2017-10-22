import { connect } from 'react-redux';
import MuteAll from './MuteAll';
import { muteAll } from '../reducer';
import actions from '../actions';

const mapStateToProps = state => ({
  muted: muteAll.isActive(state),
});

export default connect(mapStateToProps, actions)(MuteAll);
