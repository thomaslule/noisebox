import React from 'react';
import { ListGroupItem, Form, Well, Col, ControlLabel, ButtonGroup, ButtonToolbar, FormGroup, Button } from 'react-bootstrap';
import Action from './Action';
import Effect from '../Effect';
import { SelectWithButton } from '../Shared';

export default ({
  binding,
  availableActions,
  bindingActionAdd,
  canDeleteAction,
  effects,
  bindingActionDelete,
  effectAdd,
  bindingDelete,
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
                  onDelete={() => bindingActionDelete(binding.id, action)}
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
            onChoose={value => bindingActionAdd(binding.id, value)}
          />
        </Form>
      ) : null
    }
    </Well>
    {effects.map(effect => (
      <Well bsSize="small" key={effect}>
        <Effect id={effect} />
      </Well>
    ))}
    <Form horizontal onSubmit={e => e.preventDefault()}>
      <FormGroup>
        <Col mdOffset={3} md={9}>
          <ButtonToolbar>
            <Button onClick={() => effectAdd(binding.id, binding.actionType)}>Add effect</Button>
            <Button onClick={() => bindingDelete(binding.id)}>Delete binding</Button>
          </ButtonToolbar>
        </Col>
      </FormGroup>
    </Form>
  </ListGroupItem>
);
