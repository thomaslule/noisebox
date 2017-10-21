import { connect } from 'react-redux';
import Connections from './Connections';
import { addConnection, changeFrom, changeTo, deleteConnection } from './connectionsActions';
import { get } from '../componentTypesDictionary';

const mapStateToProps = (state) => {
  const componentsInputs = state.components
    .map(c => ({ componentId: c.id, inputs: get(c.typeId).inputs }))
    .map(c => ({ inputs: c.inputs.map(i => ({ componentId: c.componentId, input: i })) }))
    .map(c => c.inputs)
    .reduce((a, b) => a.concat(b), []);
  return {
    connections: state.connections,
    allComponentIds: state.components.map(c => c.id),
    allInputs: [{ componentId: 'master', input: 'main' }].concat(componentsInputs),
  };
};

const mapDispatchToProps = {
  onAdd: addConnection,
  onChangeFrom: changeFrom,
  onChangeTo: changeTo,
  onDelete: deleteConnection,
};

export default connect(mapStateToProps, mapDispatchToProps)(Connections);
