import { connect } from 'react-redux';
import ButtonBinding from './ButtonBinding';
import { changeComponent, deleteBinding } from './buttonBindingActions';

const mapStateToProps = (state, ownProps) => ({
  button: ownProps.binding.button,
  components: state.components,
  selectedComponent: ownProps.binding.component,
  selectedComponentType: (state.components.find(c => c.id === ownProps.binding.component) || { type: 'none' }).type,
});

const mapDispatchToProps = {
  onChangeComponent: changeComponent,
  onDelete: deleteBinding,
};

export default connect(mapStateToProps, mapDispatchToProps)(ButtonBinding);
