import React from 'react';
import clone from 'clone';
import noise from './noise';
import Components from './Components';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      components: [],
    };
  }

  componentDidMount() {
    noise(this.state);
  }

  changeState(f) {
    const params = clone(this.state);
    f(params);
    this.setState(params);
    noise(params);
  }

  render() {
    return (
      <div>
        <Components
          params={this.state.components}
          onAddComponent={() => this.changeState((state) => { state.components.push({ type: 'oscillator', params: { type: 'sine', frequency: 440, to_master: false } }); })}
          onOscillatorChangeType={(index, value) => this.changeState((state) => { state.components[index].params.type = value; })}
          onOscillatorChangeFrequency={(index, value) => this.changeState((state) => { state.components[index].params.frequency = value; })}
          onOscillatorChangeToMaster={(index, value) => this.changeState((state) => { state.components[index].params.to_master = value; })}
        />
      </div>
    );
  }
}

export default App;
