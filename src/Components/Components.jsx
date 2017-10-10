import React from 'react';
import { Panel, ListGroup, ListGroupItem, Button, Form, FormGroup, Col, FormControl, ControlLabel } from 'react-bootstrap';
import Oscillator from './Oscillator';
import Filter from './Filter';

class Components extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedComponent: 'oscillator',
    };
  }

  handleChangeComponent(newComponent) {
    this.setState({
      selectedComponent: newComponent,
    });
  }

  handleClickAdd() {
    this.setState({
      selectedComponent: 'oscillator',
    });
    this.props.addComponent(this.state.selectedComponent);
  }

  render() {
    const components = this.props.components.map((component) => {
      if (component.type === 'oscillator') {
        return <Oscillator key={component.id} component={component} />;
      }
      if (component.type === 'filter') {
        return <Filter key={component.id} component={component} />;
      }
      return null;
    });
    const add = (
      <ListGroupItem>
        <Form horizontal>
          <FormGroup>
            <Col componentClass={ControlLabel} md={3}>Component</Col>
            <Col md={9}>
              <FormControl value={this.state.selectedComponent} onChange={e => this.handleChangeComponent(e.target.value)} componentClass="select">
                <option value="oscillator">oscillator</option>
                <option value="filter">filter</option>
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
