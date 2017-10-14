import React from 'react';
import { Alert } from 'react-bootstrap';

export default ({ show }) => (show
  ? <Alert bsStyle="danger">Where does this smoke come from?</Alert>
  : null);
