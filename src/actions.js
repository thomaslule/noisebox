import * as componentsActions from './Components/componentsActions';
import * as connectionActions from './Connection/connectionActions';
import * as connectionsActions from './Connections/connectionsActions';

export default {
  ...componentsActions,
  ...connectionActions,
  ...connectionsActions,
};
