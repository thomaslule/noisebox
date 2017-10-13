import React from 'react';
import { Panel, ListGroup, ListGroupItem, Form } from 'react-bootstrap';
import { Button, Select } from '../Shared';

const Connection = ({
  connection, allComponents, allInputs, onChangeFrom, onChangeTo, onDelete,
}) => {
  const toSelectValueIndex = allInputs
    .findIndex(c => c.component === connection.toComponent && c.input === connection.toInput);
  const toSelectOptions = allInputs.map((i, index) => ({ text: `${i.component} ${i.input}`, value: index }));
  return (
    <ListGroupItem>
      <Form horizontal onSubmit={e => e.preventDefault()}>
        <Select
          label="From"
          value={connection.fromComponent}
          onChange={e => onChangeFrom(e.target.value)}
          options={allComponents.map(c => ({ text: c, value: c }))}
        />
        <Select
          label="To"
          value={toSelectValueIndex}
          onChange={e => onChangeTo(allInputs[e.target.value].component, allInputs[e.target.value].input)}
          options={toSelectOptions}
        />
        <Button onClick={onDelete} text="Delete" />
      </Form>
    </ListGroupItem>
  );
};

export default ({
  connections, allComponents, allInputs, onChangeFrom, onChangeTo, onAdd, onDelete,
}) => (
  <Panel header="Connections">
    <ListGroup fill>
      {connections.map(connection => (
        <Connection
          key={connection.id}
          connection={connection}
          allComponents={allComponents}
          allInputs={allInputs}
          onChangeFrom={fromComponent => onChangeFrom(connection.id, fromComponent)}
          onChangeTo={(toComponent, toInput) => onChangeTo(connection.id, toComponent, toInput)}
          onDelete={() => onDelete(connection.id)}
        />
      ))}
      {allComponents.length > 0
      ? (
        <ListGroupItem>
          <Form horizontal onSubmit={e => e.preventDefault()}>
            <Button
              onClick={() => onAdd(allComponents[0], allInputs[0].component, allInputs[0].input)}
              text="Add"
            />
          </Form>
        </ListGroupItem>)
      : null
      }
    </ListGroup>
  </Panel>
);
