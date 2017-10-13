import { connect } from 'react-redux';
import Components from './Components';
import { addComponent } from './componentsActions';
import { getAll } from './componentsDictionary';

const mapStateToProps = state => ({
  components: state.components,
  componentDefs: getAll(),
});

const mapDispatchToProps = {
  addComponent,
};

export default connect(mapStateToProps, mapDispatchToProps)(Components);
