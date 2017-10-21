import React from 'react';
import { Panel, ListGroup, ListGroupItem, Form } from 'react-bootstrap';
import { Button } from '../Shared';
import Connection from '../Connection';

export default ({ connections, connectionsAdd }) => (
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
          <Button onClick={connectionsAdd} text="Add" />
        </Form>
      </ListGroupItem>
    </ListGroup>
  </Panel>
);
