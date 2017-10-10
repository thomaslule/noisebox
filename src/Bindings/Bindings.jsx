import React from 'react';
import { Panel, ListGroup, ListGroupItem, FormControl, Button, Col, ControlLabel, FormGroup, Form } from 'react-bootstrap';
import ButtonBinding from './ButtonBinding';

class Bindings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      availableButtons: ['press A', 'release A', 'press B', 'release B'],
      selectedButton: 'press A',
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
    const add = (
      <ListGroupItem>
        <Form horizontal>
          <FormGroup>
            <Col componentClass={ControlLabel} md={3}>Button</Col>
            <Col md={9}>
              <FormControl value={this.state.selectedButton} onChange={e => this.handleChangeButton(e.target.value)} componentClass="select">
                {this.state.availableButtons.map(b => <option value={b} key={b}>{b}</option>)}
              </FormControl>
            </Col>
          </FormGroup>
          <FormGroup>
            <Col mdOffset={3} md={9}>
              <Button onClick={() => this.props.addBinding(this.state.selectedButton)}>Add</Button>
            </Col>
          </FormGroup>
        </Form>
      </ListGroupItem>
    );
    return (
      <Panel header="Bindings">
        <ListGroup fill>
          {bindings}
          {add}
        </ListGroup>
      </Panel>
    );
  }
}

export default Bindings;
