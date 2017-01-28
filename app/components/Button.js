// @flow
import React from 'react';

type Props = {
  label: string,
  handleClick: () => void
};

const Button = (props: Props) => (
  <button onClick={props.handleClick}>
    {props.label}
  </button>
);

export default Button;
