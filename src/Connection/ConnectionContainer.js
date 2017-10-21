import { connect } from 'react-redux';
import Connection from './Connection';
import { connectionsGetById } from '../reducer';
import actions from '../actions';
import { get } from '../componentTypesDictionary';

const mapStateToProps = (state, { id }) => {
  const componentsInputs = state.components
    .map(c => ({ componentId: c.id, inputs: get(c.typeId).inputs }))
    .map(c => ({ inputs: c.inputs.map(i => ({ componentId: c.componentId, input: i })) }))
    .map(c => c.inputs)
    .reduce((a, b) => a.concat(b), []);
  return {
    connection: connectionsGetById(state, id),
    allComponentIds: state.components.map(c => c.id),
    allInputs: [{ componentId: 'master', input: 'main' }].concat(componentsInputs),
  };
};

export default connect(mapStateToProps, actions)(Connection);
