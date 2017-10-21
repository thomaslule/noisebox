import { connect } from 'react-redux';
import Connections from './Connections';
import actions from '../actions';
import { connectionsGetAll } from '../reducer';

const mapStateToProps = state => ({
  connections: connectionsGetAll(state),
});

export default connect(mapStateToProps, actions)(Connections);
