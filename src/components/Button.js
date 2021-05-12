import React, { useContext } from 'react';

const Button = ({ name, callback, disabled = false }) => {
  return (
    <button disabled={ disabled } type="button" onClick={callback}>
      {name}
    </button>
  );
};

export default Button;
