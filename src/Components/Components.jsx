import React from 'react';
import { Panel, ListGroup, ListGroupItem, Form } from 'react-bootstrap';
import Component from './Component';
import { Button, Select } from '../Shared';

class Components extends React.Component {
  constructor(props) {
    super(props);
    this.componentDefs = props.componentDefs.map(c => ({ text: c.text, value: c.name }));
    this.defaultComponent = this.componentDefs[0].value;
    this.state = {
      selectedComponent: this.defaultComponent,
    };
  }

  handleChangeComponent(newComponent) {
    this.setState({
      selectedComponent: newComponent,
    });
  }

  handleClickAdd() {
    this.props.addComponent(this.state.selectedComponent);
    this.setState({
      selectedComponent: this.defaultComponent,
    });
  }

  render() {
    return (
      <Panel header="Components">
        <ListGroup fill>
          {this.props.components.map(component =>
            <Component key={component.id} component={component} />)}
          <ListGroupItem>
            <Form horizontal onSubmit={e => e.preventDefault()}>
              <Select
                label="Component"
                value={this.state.selectedComponent}
                onChange={e => this.handleChangeComponent(e.target.value)}
                options={this.componentDefs}
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
