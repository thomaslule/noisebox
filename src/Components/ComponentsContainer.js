import { connect } from 'react-redux';
import Components from './Components';
import { addComponent } from './componentsActions';

const mapStateToProps = state => ({
  components: state.components,
});

const mapDispatchToProps = {
  addComponent,
};

export default connect(mapStateToProps, mapDispatchToProps)(Components);
