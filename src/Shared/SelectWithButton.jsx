import React from 'react';
import { FormGroup, Col, ControlLabel, FormControl, Button } from 'react-bootstrap';

class SelectWithButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: props.options[0].value,
    };
  }

  componentWillReceiveProps(props) {
    this.setState({
      selected: props.options[0].value,
    });
  }

  handleChange(newValue) {
    this.setState({
      selected: newValue,
    });
  }

  handleClick() {
    this.props.onChoose(this.state.selected);
    this.setState({
      selected: this.props.options[0].value,
    });
  }

  render() {
    const {
      label, options, buttonText,
    } = this.props;
    return (
      <FormGroup>
        <Col componentClass={ControlLabel} md={3}>{label}</Col>
        <Col md={6}>
          <FormControl
            value={this.state.selected}
            onChange={e => this.handleChange(e.target.value)}
            componentClass="select"
          >
            {options.map(o => <option value={o.value} key={o.value}>{o.text}</option>)}
          </FormControl>
        </Col>
        <Col md={3}>
          <Button onClick={() => this.handleClick()}>{buttonText}</Button>
        </Col>
      </FormGroup>
    );
  }
}

export default SelectWithButton;
