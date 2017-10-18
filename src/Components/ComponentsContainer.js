import { connect } from 'react-redux';
import Components from './Components';
import { addComponent } from './componentsActions';
import { getAll } from '../componentTypesDictionary';

const mapStateToProps = state => ({
  components: state.components,
  componentTypes: getAll(),
});

const mapDispatchToProps = {
  addComponent,
};

export default connect(mapStateToProps, mapDispatchToProps)(Components);
