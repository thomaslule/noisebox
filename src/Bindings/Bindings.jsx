import React from 'react';
import { Panel, ListGroup, ListGroupItem, Form } from 'react-bootstrap';
import Binding from './Binding';
import { SelectWithButton } from '../Shared';

export default ({ bindings, actions, addBinding }) => (
  <Panel header="Bindings">
    <ListGroup fill>
      {bindings.map(binding => <Binding key={binding.id} binding={binding} />)}
      <ListGroupItem>
        <Form horizontal onSubmit={e => e.preventDefault()}>
          <SelectWithButton
            label="Action"
            options={actions.map(a => ({ text: a.text, value: a.id }))}
            buttonText="Add"
            onChoose={value => addBinding(value)}
          />
        </Form>
      </ListGroupItem>
    </ListGroup>
  </Panel>
);
