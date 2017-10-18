import React from 'react';
import { ListGroupItem, Form } from 'react-bootstrap';
import Action from './Action';
import Effect from './Effect';
import { Button, SelectWithButton } from '../../Shared';

export default ({
  binding,
  availableActions,
  onAddAction,
  canDeleteAction,
  onDeleteAction,
  allComponentIds,
  onAddEffect,
  onDelete,
}) => (
  <ListGroupItem>
    {binding.actions.map(action => (
      <Action
        key={action}
        action={action}
        canDelete={canDeleteAction}
        onDelete={() => onDeleteAction(action)}
      />
        ))}
    <Form horizontal onSubmit={e => e.preventDefault()}>
      <SelectWithButton
        label="Action"
        options={availableActions.map(a => ({ text: a, value: a }))}
        buttonText="Add"
        onChoose={value => onAddAction(value)}
      />
    </Form>
    {binding.effects.map(effect => (
      <Effect
        key={effect.id}
        effect={effect}
        bindingId={binding.id}
        actionType={binding.actionType}
      />
    ))}
    <Form horizontal onSubmit={e => e.preventDefault()}>
      {allComponentIds.length > 0 ? (
        <SelectWithButton
          label="Component"
          options={allComponentIds.map(a => ({ text: a, value: a }))}
          buttonText="Add"
          onChoose={value => onAddEffect(value)}
        />
      ) : null}
    </Form>
    <Form horizontal onSubmit={e => e.preventDefault()}>
      <Button text="Delete" onClick={() => onDelete()} />
    </Form>
  </ListGroupItem>
);
