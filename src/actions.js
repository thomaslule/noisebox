import * as componentsActions from './Components/componentsActions';
import * as connectionsActions from './Connections/connectionsActions';
import * as effectsActions from './Effect/effectsActions';

export default {
  ...componentsActions,
  ...connectionsActions,
  ...effectsActions,
};
