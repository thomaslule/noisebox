import React from 'react';
import { Panel, ListGroup, ListGroupItem, FormControl, Button, Col, ControlLabel, FormGroup, Form } from 'react-bootstrap';
import { buttonsList, axisList, triggersList } from '../controller';
import ButtonBinding from './ButtonBinding';


const getListAvailableActions = (props) => {
  const axisActions = axisList().map(a => `move ${a}`);
  const triggersActions = triggersList().map(t => `move ${t}`);
  const buttonActions = buttonsList().map(b => [`press ${b}`, `release ${b}`]).reduce((a, b) => a.concat(b));
  const actionsInUse = props.bindings.map(b => b.button);
  return axisActions.concat(triggersActions).concat(buttonActions).filter(a => !actionsInUse.includes(a));
};

class Bindings extends React.Component {
  constructor(props) {
    super(props);
    const actions = getListAvailableActions(props);
    this.state = {
      availableActions: actions,
      selectedAction: actions[0],
    };
  }

  componentWillReceiveProps(nextProps) {
    const actions = getListAvailableActions(nextProps);
    if (actions.length === 0) {
      this.setState({});
    } else {
      this.setState({
        availableActions: actions,
        selectedAction: actions[0],
      });
    }
  }

  handleChangeButton(newButton) {
    this.setState({
      ...this.state,
      selectedAction: newButton,
    });
  }

  render() {
    const bindings = this.props.bindings.map(binding => (<ButtonBinding key={binding.button} binding={binding} />));
    const add = this.state.availableActions ? (
      <ListGroupItem>
        <Form horizontal>
          <FormGroup>
            <Col componentClass={ControlLabel} md={3}>Action</Col>
            <Col md={9}>
              <FormControl value={this.state.selectedAction} onChange={e => this.handleChangeButton(e.target.value)} componentClass="select">
                {this.state.availableActions.map(b => <option value={b} key={b}>{b}</option>)}
              </FormControl>
            </Col>
          </FormGroup>
          <FormGroup>
            <Col mdOffset={3} md={9}>
              <Button onClick={() => this.props.addBinding(this.state.selectedAction)}>Add</Button>
            </Col>
          </FormGroup>
        </Form>
      </ListGroupItem>
    ) : null;
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
