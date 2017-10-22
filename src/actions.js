import * as componentsActions from './Components/componentsActions';
import * as bindingsActions from './Bindings/bindingsActions';
import * as connectionsActions from './Connections/connectionsActions';
import * as effectsActions from './Effect/effectsActions';

export default {
  ...bindingsActions,
  ...componentsActions,
  ...connectionsActions,
  ...effectsActions,
};
