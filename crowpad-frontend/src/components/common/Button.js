import React from 'react';
import './Button.scss';
const Button = props => {
  return (
    <button style={{ padding: props.padding }} className="crow-button">
      {props.children}
    </button>
  );
};

export default Button;
