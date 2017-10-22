import { connect } from 'react-redux';
import MuteAll from './MuteAll';
import { muteAllActive } from '../reducer';
import actions from '../actions';

const mapStateToProps = state => ({
  muted: muteAllActive(state),
});

export default connect(mapStateToProps, actions)(MuteAll);
