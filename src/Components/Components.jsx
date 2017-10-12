import React from 'react';
import { Panel, ListGroup, ListGroupItem, Form } from 'react-bootstrap';
import Component from './Component';
import { Button, Select } from '../Shared';
import { getAll, getDefault } from './componentsDictionary';

const defaultComponent = getDefault().name;

class Components extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedComponent: defaultComponent,
    };
  }

  handleChangeComponent(newComponent) {
    this.setState({
      selectedComponent: newComponent,
    });
  }

  handleClickAdd() {
    this.setState({
      selectedComponent: defaultComponent,
    });
    this.props.addComponent(this.state.selectedComponent);
  }

  render() {
    return (
      <Panel header="Components">
        <ListGroup fill>
          {this.props.components.map(component =>
            <Component key={component.id} component={component} />)}
          <ListGroupItem>
            <Form horizontal>
              <Select
                label="Component"
                value={this.state.selectedComponent}
                onChange={e => this.handleChangeComponent(e.target.value)}
                options={getAll().map(c => ({ text: c.text, value: c.name }))}
              />
              <Button
                onClick={() => this.handleClickAdd()}
                text="Add"
              />
            </Form>
          </ListGroupItem>
        </ListGroup>
      </Panel>
    );
  }
}

export default Components;
