import Tone from 'tone';
import { onPress } from './controller';

export default () => {
  const synth = new Tone.Synth().toMaster();

  onPress('A', () => synth.triggerAttackRelease('C4', '8n'));
};
