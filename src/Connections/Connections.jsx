import React from 'react';
import { Panel, ListGroup, ListGroupItem, Form } from 'react-bootstrap';
import { Button, Select } from '../Shared';

const Connection = ({
  connection, allComponentIds, allInputs, onChangeFrom, onChangeTo, onDelete,
}) => {
  const toSelectValueIndex = allInputs
    .findIndex(c => c.componentId === connection.toComponentId && c.input === connection.toInput);
  const toSelectOptions = allInputs
    .map((i, index) => ({ text: `${i.componentId} ${i.input === 'main' ? '' : i.input}`, value: index }));
  return (
    <ListGroupItem>
      <Form horizontal onSubmit={e => e.preventDefault()}>
        <Select
          label="From"
          value={connection.fromComponentId}
          onChange={e => onChangeFrom(e.target.value)}
          options={allComponentIds.map(c => ({ text: c, value: c }))}
        />
        <Select
          label="To"
          value={toSelectValueIndex}
          onChange={e => onChangeTo(allInputs[e.target.value].componentId, allInputs[e.target.value].input)}
          options={toSelectOptions}
        />
        <Button onClick={onDelete} text="Delete" />
      </Form>
    </ListGroupItem>
  );
};

export default ({
  connections, allComponentIds, allInputs, onChangeFrom, onChangeTo, onAdd, onDelete,
}) => (
  <Panel header="Connections">
    <ListGroup fill>
      {connections.map(connection => (
        <Connection
          key={connection.id}
          connection={connection}
          allComponentIds={allComponentIds}
          allInputs={allInputs}
          onChangeFrom={fromComponentId => onChangeFrom(connection.id, fromComponentId)}
          onChangeTo={(toComponentId, toInput) => onChangeTo(connection.id, toComponentId, toInput)}
          onDelete={() => onDelete(connection.id)}
        />
      ))}
      {allComponentIds.length > 0
      ? (
        <ListGroupItem>
          <Form horizontal onSubmit={e => e.preventDefault()}>
            <Button
              onClick={
                () => onAdd(allComponentIds[0], allInputs[0].componentId, allInputs[0].input)
              }
              text="Add"
            />
          </Form>
        </ListGroupItem>)
      : null
      }
    </ListGroup>
  </Panel>
);
