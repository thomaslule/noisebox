import { connect } from 'react-redux';
import Error from './Error';
import { error } from '../reducer';

const mapStateToProps = state => ({
  show: error.isPresent(state),
});

export default connect(mapStateToProps)(Error);
