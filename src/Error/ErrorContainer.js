import { connect } from 'react-redux';
import Error from './Error';
import { errorIsPresent } from '../reducer';

const mapStateToProps = state => ({
  show: errorIsPresent(state),
});

export default connect(mapStateToProps)(Error);
