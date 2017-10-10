import { connect } from 'react-redux';
import ButtonBinding from './ButtonBinding';
import { changeComponent } from './buttonBindingActions';

const mapStateToProps = (state, ownProps) => ({
  button: ownProps.button,
  components: state.components,
  selectedComponent: state.gamepadMapping.find(b => b.button === ownProps.button).component,
});

const mapDispatchToProps = {
  onChangeComponent: changeComponent,
};

export default connect(mapStateToProps, mapDispatchToProps)(ButtonBinding);
