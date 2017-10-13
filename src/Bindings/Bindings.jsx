import React from 'react';
import { Panel, ListGroup, ListGroupItem, Form } from 'react-bootstrap';
import Binding from './Binding';
import { Select, Button } from '../Shared';

class Bindings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedAction: props.actions[0],
    };
  }

  handleChangeAction(value) {
    this.setState({
      ...this.state,
      selectedAction: value,
    });
  }

  handleClickAdd() {
    this.props.addBinding(this.state.selectedAction);
    this.setState({
      ...this.state,
      selectedAction: this.props.actions[0],
    });
  }

  render() {
    return (
      <Panel header="Bindings">
        <ListGroup fill>
          {this.props.bindings.map(binding => <Binding key={binding.id} binding={binding} />)}
          <ListGroupItem>
            <Form horizontal onSubmit={e => e.preventDefault()}>
              <Select
                label="Action"
                value={this.state.selectedAction}
                onChange={e => this.handleChangeAction(e.target.value)}
                options={this.props.actions.map(a => ({ text: a, value: a }))}
              />
              <Button text="Add" onClick={() => this.handleClickAdd()} />
            </Form>
          </ListGroupItem>
        </ListGroup>
      </Panel>
    );
  }
}

export default Bindings;
