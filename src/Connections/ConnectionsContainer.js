import { connect } from 'react-redux';
import Connections from './Connections';
import actions from '../actions';
import { connections } from '../reducer';

const mapStateToProps = state => ({
  connections: connections.getAll(state),
});

export default connect(mapStateToProps, actions)(Connections);
