import React from 'react';
import PropTypes from 'prop-types';
import { StyledErrorMessage } from './ErrorMessage.styles';

const ErrorMessage = ({ message }) => {
  return message ? (
    <StyledErrorMessage>{message.message}</StyledErrorMessage>
  ) : (
    ''
  );
};

ErrorMessage.propTypes = {};

export default ErrorMessage;