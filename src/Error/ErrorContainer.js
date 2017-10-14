import { connect } from 'react-redux';
import Error from './Error';

const mapStateToProps = state => ({
  show: state.error !== null,
});

export default connect(mapStateToProps)(Error);
