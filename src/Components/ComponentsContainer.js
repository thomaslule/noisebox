import { connect } from 'react-redux';
import Components from './Components';
import { components } from '../reducer';
import actions from '../actions';
import { getAll } from '../componentTypesDictionary';

const mapStateToProps = state => ({
  components: components.getAll(state),
  componentTypes: getAll(),
});

export default connect(mapStateToProps, actions)(Components);
