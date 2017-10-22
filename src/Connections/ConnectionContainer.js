import { connect } from 'react-redux';
import Connection from './Connection';
import { connections, components } from '../reducer';
import actions from '../actions';
import { get } from '../componentTypesDictionary';

const mapStateToProps = (state, { id }) => {
  const allInputs = [{ componentId: 'master', input: 'main' }];
  components.getAll(state).forEach((c) => {
    get(c.typeId).inputs.forEach((i) => {
      allInputs.push({ componentId: c.id, input: i });
    });
  });
  return {
    connection: connections.getById(state, id),
    allComponentIds: components.getAll(state).map(c => c.id),
    allInputs,
  };
};

export default connect(mapStateToProps, actions)(Connection);
