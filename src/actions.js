import * as componentsActions from './Components/componentsActions';
import * as bindingsActions from './Bindings/bindingsActions';
import * as connectionsActions from './Connections/connectionsActions';
import * as effectsActions from './Effect/effectsActions';
import * as muteAllActions from './MuteAll/muteAllActions';
import * as setupJsonActions from './SetupJson/setupJsonActions';
import * as errorActions from './Error/errorActions';
import * as gamepadsActions from './Gamepads/gamepadsActions';
import * as deadzoneActions from './Deadzone/deadzoneActions';
import * as clearSetupActions from './ClearSetup/clearSetupActions';

export default {
  ...bindingsActions,
  ...componentsActions,
  ...connectionsActions,
  ...effectsActions,
  ...muteAllActions,
  ...setupJsonActions,
  ...errorActions,
  ...gamepadsActions,
  ...deadzoneActions,
  ...clearSetupActions,
};
