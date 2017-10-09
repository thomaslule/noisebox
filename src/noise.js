import Tone from 'tone';
import { onMoveStick, onPress } from './controller';

const params = {
  oscillator: {
    volume: -10,
    frequency: 320,
  },
  filter: {
    frequency: 350,
    gain: 0,
  },
  freq_sensi: 300,
  gain_sensi: 1,
};

const oscillator = new Tone.Oscillator(params.oscillator);
const filter = new Tone.Filter(params.filter).toMaster();
oscillator.connect(filter);

onMoveStick('RSTICK_Y', (value) => {
  filter.frequency.value = params.filter.frequency + (value * params.freq_sensi);
});

onMoveStick('RSTICK_X', (value) => {
  filter.gain.value = params.filter.gain + (value * params.gain_sensi);
});

onPress('A', () => {
  filter.type = 'lowpass';
});

onPress('B', () => {
  filter.type = 'highpass';
});

onPress('X', () => {
  filter.type = 'bandpass';
});

onPress('Y', () => {
  filter.type = 'lowshelf';
});

export default () => {
  onPress('START', () => (oscillator.state === 'started' ? oscillator.stop() : oscillator.start()));
};
