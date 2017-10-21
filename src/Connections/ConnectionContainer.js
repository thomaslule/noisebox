import { connect } from 'react-redux';
import Connection from './Connection';
import { connectionsGetById, componentsGetAll } from '../reducer';
import actions from '../actions';
import { get } from '../componentTypesDictionary';

const mapStateToProps = (state, { id }) => {
  const allInputs = [{ componentId: 'master', input: 'main' }];
  componentsGetAll(state).forEach((c) => {
    get(c.typeId).inputs.forEach((i) => {
      allInputs.push({ componentId: c.id, input: i });
    });
  });
  return {
    connection: connectionsGetById(state, id),
    allComponentIds: componentsGetAll(state).map(c => c.id),
    allInputs,
  };
};

export default connect(mapStateToProps, actions)(Connection);
