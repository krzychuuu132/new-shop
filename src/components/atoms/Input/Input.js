import React from 'react';
import PropTypes from 'prop-types';
import { Input as StyledInput, InputWrapper, Label } from './Input.styles';

const Input = (props) => {
  const { placeholder, id } = props;
  console.log(props);
  return (
    <InputWrapper>
      <StyledInput {...props} />
      {placeholder && <Label htmlFor={id}>{placeholder}</Label>}
    </InputWrapper>
  );
};

Input.propTypes = {};

export default Input;
