import { connect } from 'react-redux';
import MuteAll from './MuteAll';
import actions from '../actions';

const mapStateToProps = state => ({
  muted: state.muteAll,
});

export default connect(mapStateToProps, actions)(MuteAll);
