import React from 'react';
import { Panel, ListGroup, ListGroupItem, Form } from 'react-bootstrap';
import { Button } from '../Shared';
import Connection from './ConnectionContainer';

export default ({ connections, connectionAdd }) => (
  <Panel header="Connections">
    <ListGroup fill>
      {connections.map(connection => (
        <Connection
          key={connection.id}
          id={connection.id}
        />
      ))}
      <ListGroupItem>
        <Form horizontal onSubmit={e => e.preventDefault()}>
          <Button onClick={connectionAdd} text="Add" />
        </Form>
      </ListGroupItem>
    </ListGroup>
  </Panel>
);
