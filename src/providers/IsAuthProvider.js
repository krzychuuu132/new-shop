import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AuthContext = React.createContext({
  jwt: '',
  userId: '',
  tokenExpiration: '',
  addAuthData: () => {},
});

const IsAuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState({
    jwt: '',
    userId: '',
    tokenExpiration: '',
  });

  const addAuthData = (jwt, userId, tokenExpiration) => {
    setAuthData({ jwt, userId, tokenExpiration });
  };

  return (
    <AuthContext.Provider
      value={{
        jwt: authData.jwt,
        userId: authData.userId,
        tokenExpiration: authData.tokenExpiration,
        addAuthData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

IsAuthProvider.propTypes = {};

export default IsAuthProvider;
