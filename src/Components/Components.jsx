import React from 'react';
import { Panel, ListGroup, ListGroupItem, Form } from 'react-bootstrap';
import Component from './Component';
import { Button, Select } from '../Shared';

class Components extends React.Component {
  constructor(props) {
    super(props);
    this.componentTypeOptions = props.componentTypes.map(c => ({ text: c.text, value: c.id }));
    this.defaultComponentType = this.componentTypeOptions[0].value;
    this.state = {
      selectedComponentType: this.defaultComponentType,
    };
  }

  handleChangeComponentType(newComponent) {
    this.setState({
      selectedComponentType: newComponent,
    });
  }

  handleClickAdd() {
    this.props.addComponent(this.state.selectedComponentType);
    this.setState({
      selectedComponentType: this.defaultComponentType,
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
                label="Component type"
                value={this.state.selectedComponentType}
                onChange={e => this.handleChangeComponentType(e.target.value)}
                options={this.componentTypeOptions}
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
