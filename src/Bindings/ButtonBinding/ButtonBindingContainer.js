import { connect } from 'react-redux';
import ButtonBinding from './ButtonBinding';
import { changeComponent, deleteBinding } from './buttonBindingActions';

const mapStateToProps = (state, ownProps) => ({
  button: ownProps.button,
  components: state.components,
  selectedComponent: state.bindings.find(b => b.button === ownProps.button).component,
});

const mapDispatchToProps = {
  onChangeComponent: changeComponent,
  onDelete: deleteBinding,
};

export default connect(mapStateToProps, mapDispatchToProps)(ButtonBinding);
