import React from 'react';
import { Panel, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import Oscillator from './Oscillator';

export default (props) => {
  const components = props.components.map((component) => {
    if (component.type === 'oscillator') {
      return (
        <Oscillator
          key={component.id}
          component={component}
        />
      );
    }
    return null;
  });
  const add = (
    <ListGroupItem>
      <Button onClick={() => props.addComponent()}>Add</Button>
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
};
