import React from 'react';
import PropTypes from 'prop-types';
import { StyledErrorMessage } from './ErrorMessage.styles';

const ErrorMessage = ({ message, isRegister }) => {
  return message ? (
    <StyledErrorMessage isRegister={isRegister} className="error-message">
      {message.message}
    </StyledErrorMessage>
  ) : (
    ''
  );
};

ErrorMessage.propTypes = {};

export default ErrorMessage;
