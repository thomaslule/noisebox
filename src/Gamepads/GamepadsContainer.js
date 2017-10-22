import { connect } from 'react-redux';
import Gamepads from './Gamepads';
import actions from '../actions';
import { gamepads } from '../reducer';

const mapStateToProps = state => ({
  gamepads: gamepads.getAll(state),
});

export default connect(mapStateToProps, actions)(Gamepads);
