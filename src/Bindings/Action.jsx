import React from 'react';
import { Button, Glyphicon } from 'react-bootstrap';
import { get } from '../actionsDictionary';

export default ({ actionId, canDelete, onDelete }) => (
  <Button disabled={!canDelete} onClick={() => onDelete()}>
    {get(actionId).text}{' '}
    {canDelete ? <Glyphicon glyph="trash" /> : null}
  </Button>
);
