import React from 'react';
import PropTypes from 'prop-types';
import { Input as StyledInput } from './Input.styles';

const Input = (props) => {
  return (
    <div>
      <StyledInput {...props} />
    </div>
  );
};

Input.propTypes = {};

export default Input;
