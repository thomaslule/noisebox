import React from 'react';
import ButtonBinding from './ButtonBinding';

class GamepadMapping extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      availableButtons: ['A', 'B'],
      selectedButton: 'A',
    };
  }

  handleChangeButton(newButton) {
    this.setState({
      ...this.state,
      selectedButton: newButton,
    });
  }

  render() {
    const bindings = this.props.bindings.map(binding => (<ButtonBinding key={binding.button} button={binding.button} />));
    const buttonChoice = (
      <select value={this.state.selectedButton} onChange={e => this.handleChangeButton(e.target.value)}>
        {this.state.availableButtons.map(b => <option value={b} key={b}>{b}</option>)}
      </select>
    );
    const add = <button onClick={() => this.props.addBinding(this.state.selectedButton)}>Add</button>;
    return <div>{bindings}{buttonChoice}{add}</div>;
  }
}

export default GamepadMapping;
