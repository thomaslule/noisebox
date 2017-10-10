import { connect } from 'react-redux';
import MuteAll from './MuteAll';
import { switchMute } from './muteAllActions';

const mapStateToProps = state => ({
  muted: state.muteAll,
});

const mapDispatchToProps = {
  switchMute,
};

export default connect(mapStateToProps, mapDispatchToProps)(MuteAll);
