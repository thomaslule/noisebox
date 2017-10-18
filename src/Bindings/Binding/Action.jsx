import React from 'react';
import { Button, Glyphicon } from 'react-bootstrap';

export default ({ action, canDelete, onDelete }) => (
  <Button disabled={!canDelete} onClick={() => onDelete()}>
    {action}{' '}
    {canDelete ? <Glyphicon glyph="trash" /> : null}
  </Button>
);
