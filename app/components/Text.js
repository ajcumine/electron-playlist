import React from 'react';

type Props = {
  text: string
};

const Text = (props: Props) => (
  <div>{props.text}</div>
);

export default Text;
