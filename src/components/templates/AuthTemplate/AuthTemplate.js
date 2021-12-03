import React from 'react';
import { useLocation } from 'react-router-dom';
import { Wrapper } from './AuthTemplate.styles';
import DontHaveAccount from 'components/molecules/DontHaveAccount/DontHaveAccount';
import { authLayout } from 'helpers/authLayout';
import LogInForm from 'components/molecules/LogInForm/LogInForm';
import RegisterForm from 'components/molecules/RegisterForm/RegisterForm';

const AuthTemplate = () => {
  let location = useLocation();

  const { pathname } = location;

  console.log(authLayout(pathname), pathname);
  return (
    <Wrapper>
      {<DontHaveAccount isLogIn={authLayout(pathname)} />}
      {authLayout(pathname) ? <LogInForm /> : <RegisterForm />}
    </Wrapper>
  );
};

export default AuthTemplate;
