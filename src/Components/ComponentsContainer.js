import { connect } from 'react-redux';
import Components from './Components';
import { componentsGetAll } from '../reducer';
import actions from '../actions';
import { getAll } from '../componentTypesDictionary';

const mapStateToProps = state => ({
  components: componentsGetAll(state),
  componentTypes: getAll(),
});

export default connect(mapStateToProps, actions)(Components);
