import React from 'react';
import PropTypes from 'prop-types';
import { Input as StyledInput, InputWrapper, Label } from './Input.styles';

const Input = (props) => {
  const { label, placeholder, id } = props;
  return (
    <InputWrapper>
      <StyledInput {...props} />
      {label ? <Label htmlFor={id}>{placeholder || label}</Label> : null}
    </InputWrapper>
  );
};

Input.propTypes = {};

export default Input;
