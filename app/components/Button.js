// @flow
import React from 'react';

type Props = {
  label: string
};

const Button = (props: Props) => (
  <button>
    {props.label}
  </button>
);

export default Button;
