import React from 'react';

export const Comment = (props) => (
  <div>
    <b>{props.owner}</b> {props.text}
  </div>
);
