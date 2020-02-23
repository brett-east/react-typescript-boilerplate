import React from 'react';

export interface HelloProps {
  firstName: string;
  lastName: string;
}

export const Hello = (props: HelloProps): JSX.Element => (
  <h1>
    Hello from {props.firstName} {props.lastName}!
  </h1>
);
