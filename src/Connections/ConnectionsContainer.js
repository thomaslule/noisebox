import { connect } from 'react-redux';
import Connections from './Connections';
import { addConnection, changeFrom, changeTo, deleteConnection } from './connectionsActions';
import { get } from '../componentsDictionary';

const mapStateToProps = (state) => {
  const componentsInputs = state.components
    .map(c => ({ component: c.id, inputs: get(c.type).inputs }))
    .map(c => ({ inputs: c.inputs.map(i => ({ component: c.component, input: i })) }))
    .map(c => c.inputs)
    .reduce((a, b) => a.concat(b), []);
  return {
    connections: state.connections,
    allComponents: state.components.map(c => c.id),
    allInputs: [{ component: 'master', input: 'self' }].concat(componentsInputs),
  };
};

const mapDispatchToProps = {
  onAdd: addConnection,
  onChangeFrom: changeFrom,
  onChangeTo: changeTo,
  onDelete: deleteConnection,
};

export default connect(mapStateToProps, mapDispatchToProps)(Connections);
