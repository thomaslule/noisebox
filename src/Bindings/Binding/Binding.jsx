import React from 'react';
import { ListGroupItem, Form, Well } from 'react-bootstrap';
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
    {
      availableActions.length > 0 ? (
        <Form horizontal onSubmit={e => e.preventDefault()}>
          <SelectWithButton
            label="Action"
            options={availableActions.map(a => ({ text: a, value: a }))}
            buttonText="Add"
            onChoose={value => onAddAction(value)}
          />
        </Form>
      ) : null
    }
    {binding.effects.map(effect => (
      <Well>
        <Effect
          key={effect.id}
          effect={effect}
          bindingId={binding.id}
          actionType={binding.actionType}
        />
      </Well>
    ))}
    {allComponentIds.length > 0 ? (
      <Well>
        <Form horizontal onSubmit={e => e.preventDefault()}>
          <SelectWithButton
            label="Component"
            options={allComponentIds.map(a => ({ text: a, value: a }))}
            buttonText="Add effect"
            onChoose={value => onAddEffect(value)}
          />
        </Form>
      </Well>
      ) : null}
    <Form horizontal onSubmit={e => e.preventDefault()}>
      <Button text="Delete binding" onClick={() => onDelete()} />
    </Form>
  </ListGroupItem>
);
