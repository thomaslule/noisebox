import React from 'react';
import { ListGroupItem, Form, Well, Col, ControlLabel, ButtonGroup, ButtonToolbar, FormGroup, Button } from 'react-bootstrap';
import Action from './Action';
import Effect from '../Effect';
import { SelectWithButton } from '../Shared';

export default ({
  binding,
  availableActions,
  onAddAction,
  canDeleteAction,
  onDeleteAction,
  onAddEffect,
  onDelete,
}) => (
  <ListGroupItem>
    <Well bsSize="small">
      <Form horizontal onSubmit={e => e.preventDefault()}>
        <FormGroup>
          <Col componentClass={ControlLabel} md={3}>Actions</Col>
          <Col md={9}>
            <ButtonGroup>
              {binding.actions.map(action => (
                <Action
                  key={action}
                  actionId={action}
                  canDelete={canDeleteAction}
                  onDelete={() => onDeleteAction(action)}
                />
            ))}
            </ButtonGroup>
          </Col>
        </FormGroup>
      </Form>
      {
      availableActions.length > 0 ? (
        <Form horizontal onSubmit={e => e.preventDefault()}>
          <SelectWithButton
            label=""
            options={availableActions.map(a => ({ text: a.text, value: a.id }))}
            buttonText="Add"
            onChoose={value => onAddAction(value)}
          />
        </Form>
      ) : null
    }
    </Well>
    {binding.effects.map(effect => (
      <Well bsSize="small" key={effect.id}>
        <Effect
          effect={effect}
          bindingId={binding.id}
          actionType={binding.actionType}
        />
      </Well>
    ))}
    <Form horizontal onSubmit={e => e.preventDefault()}>
      <FormGroup>
        <Col mdOffset={3} md={9}>
          <ButtonToolbar>
            <Button onClick={() => onAddEffect()}>Add effect</Button>
            <Button onClick={() => onDelete()}>Delete binding</Button>
          </ButtonToolbar>
        </Col>
      </FormGroup>
    </Form>
  </ListGroupItem>
);
