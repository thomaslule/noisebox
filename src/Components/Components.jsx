import React from 'react';
import { Panel, ListGroup, ListGroupItem, Button, Form, FormGroup, Col, FormControl, ControlLabel } from 'react-bootstrap';
import Component from './Component';
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
    const components = this.props.components.map(component => (
      <Component key={component.id} component={component} />
    ));
    const add = (
      <ListGroupItem>
        <Form horizontal>
          <FormGroup>
            <Col componentClass={ControlLabel} md={3}>Component</Col>
            <Col md={9}>
              <FormControl
                value={this.state.selectedComponent}
                onChange={e => this.handleChangeComponent(e.target.value)}
                componentClass="select"
              >
                {getAll().map(c => <option value={c.name} key={c.name}>{c.text}</option>)}
              </FormControl>
            </Col>
          </FormGroup>
          <FormGroup>
            <Col mdOffset={3} md={9}>
              <Button onClick={() => this.handleClickAdd()}>Add</Button>
            </Col>
          </FormGroup>
        </Form>
      </ListGroupItem>
    );
    return (
      <Panel header="Components">
        <ListGroup fill>
          {components}
          {add}
        </ListGroup>
      </Panel>
    );
  }
}

export default Components;
