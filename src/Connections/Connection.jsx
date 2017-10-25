import React from 'react';
import { ListGroupItem, Form } from 'react-bootstrap';
import { Button, Select } from '../Shared';

export default ({
  connection,
  allComponentIds,
  allInputs,
  connectionChangeFrom,
  connectionChangeTo,
  connectionDelete,
}) => {
  const toSelectValueIndex = allInputs
    .findIndex(c => c.componentId === connection.toComponent && c.input === connection.toInput);
  const toSelectOptions = allInputs
    .map((i, index) => ({ text: `${i.componentId} ${i.input === 'main' ? '' : i.input}`, value: index }));
  return (
    <ListGroupItem>
      <Form horizontal onSubmit={e => e.preventDefault()}>
        <Select
          label="From"
          value={connection.fromComponent}
          onChange={value => connectionChangeFrom(connection.id, value)}
          options={allComponentIds.map(c => ({ text: c, value: c }))}
        />
        <Select
          label="To"
          value={toSelectValueIndex}
          onChange={value => connectionChangeTo(
            connection.id,
            allInputs[value].componentId,
            allInputs[value].input,
          )}
          options={toSelectOptions}
        />
        <Button onClick={() => connectionDelete(connection.id)} text="Delete" />
      </Form>
    </ListGroupItem>
  );
};
