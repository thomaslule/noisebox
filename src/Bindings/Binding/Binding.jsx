import React from 'react';
import { ListGroupItem, Form } from 'react-bootstrap';
import Action from './Action';
import Effect from './Effect';
import { Select, Button } from '../../Shared';

class Binding extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedAction: props.availableActions[0],
      selectedComponent: props.allComponents[0],
    };
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      ...this.state,
      selectedComponent: newProps.allComponents[0],
    });
  }

  handleChangeAction(value) {
    this.setState({
      ...this.state,
      selectedAction: value,
    });
  }

  handleClickAddAction() {
    this.props.onAddAction(this.state.selectedAction);
    this.setState({
      ...this.state,
      selectedAction: this.props.availableActions[0],
    });
  }

  handleChangeComponent(value) {
    this.setState({
      ...this.state,
      selectedComponent: value,
    });
  }

  handleClickAddEffect() {
    this.props.onAddEffect(this.state.selectedComponent);
    this.setState({
      ...this.state,
      selectedComponent: this.props.allComponents[0],
    });
  }

  render() {
    const {
      binding,
      availableActions,
      canDeleteAction,
      onDeleteAction,
      allComponents,
      onDelete,
    } = this.props;
    return (
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
          <Select
            label="Action"
            value={this.state.selectedAction}
            onChange={e => this.handleChangeAction(e.target.value)}
            options={availableActions.map(a => ({ text: a, value: a }))}
          />
          <Button text="Add" onClick={() => this.handleClickAddAction()} />
        </Form>
        {binding.effects.map(effect =>
          (<Effect
            key={effect.id}
            effect={effect}
            bindingId={binding.id}
            actionType={binding.actionType}
          />))}
        <Form horizontal onSubmit={e => e.preventDefault()}>
          <Select
            label="Component"
            value={this.state.selectedComponent}
            onChange={e => this.handleChangeComponent(e.target.value)}
            options={allComponents.map(a => ({ text: a, value: a }))}
          />
          {this.state.selectedComponent
            ? <Button text="Add" onClick={() => this.handleClickAddEffect()} />
            : null}
        </Form>
        <Form horizontal onSubmit={e => e.preventDefault()}>
          <Button text="Delete" onClick={() => onDelete()} />
        </Form>
      </ListGroupItem>
    );
  }
}

export default Binding;
