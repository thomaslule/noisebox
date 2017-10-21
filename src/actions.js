import * as componentActions from './Component/componentActions';
import * as componentsActions from './Components/componentsActions';
import * as connectionActions from './Connection/connectionActions';
import * as connectionsActions from './Connections/connectionsActions';

export default {
  ...componentActions,
  ...componentsActions,
  ...connectionActions,
  ...connectionsActions,
};
