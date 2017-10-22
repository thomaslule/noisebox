import * as componentsActions from './Components/componentsActions';
import * as bindingsActions from './Bindings/bindingsActions';
import * as connectionsActions from './Connections/connectionsActions';
import * as effectsActions from './Effect/effectsActions';
import * as muteAllActions from './MuteAll/muteAllActions';
import * as stateJsonActions from './StateJson/stateJsonActions';

export default {
  ...bindingsActions,
  ...componentsActions,
  ...connectionsActions,
  ...effectsActions,
  ...muteAllActions,
  ...stateJsonActions,
};
