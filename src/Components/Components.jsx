import React from 'react';
import { Panel, ListGroup, ListGroupItem, Form } from 'react-bootstrap';
import Component from '../Component';
import { SelectWithButton } from '../Shared';

export default ({ components, componentTypes, componentAdd }) => (
  <Panel header="Components">
    <ListGroup fill>
      {components.map(component =>
        <Component key={component.id} component={component} />)}
      <ListGroupItem>
        <Form horizontal onSubmit={e => e.preventDefault()}>
          <SelectWithButton
            label="Type"
            options={componentTypes.map(c => ({ text: c.text, value: c.id }))}
            buttonText="Add"
            onChoose={value => componentAdd(value)}
          />
        </Form>
      </ListGroupItem>
    </ListGroup>
  </Panel>
);
