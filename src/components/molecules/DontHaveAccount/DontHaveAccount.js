import React from 'react';
import {} from './DontHaveAccount.styles';
import PropTypes from 'prop-types';
import ButtonLink from 'components/atoms/ButtonLink/ButtonLink';

const DontHaveAccount = ({ isLogIn }) => {
  return (
    <div>
      <h2>{!isLogIn ? 'Posiadasz konto ?' : 'Nie posiadasz konta?'}</h2>

      <ButtonLink to={isLogIn ? '/rejestracja' : '/zaloguj'}>
        {!isLogIn ? 'Zaloguj się' : 'Zarejestruj się'}
      </ButtonLink>
    </div>
  );
};

DontHaveAccount.propTypes = {};

export default DontHaveAccount;
