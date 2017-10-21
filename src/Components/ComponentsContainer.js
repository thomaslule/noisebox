import { connect } from 'react-redux';
import Components from './Components';
import actions from '../actions';
import { getAll } from '../componentTypesDictionary';

const mapStateToProps = state => ({
  components: state.components,
  componentTypes: getAll(),
});

export default connect(mapStateToProps, actions)(Components);
