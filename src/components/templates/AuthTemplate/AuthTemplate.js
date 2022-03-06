import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Wrapper } from './AuthTemplate.styles';
import { authLayout } from 'helpers/authLayout';
import LogInForm from 'components/molecules/LogInForm/LogInForm';
import RegisterForm from 'components/molecules/RegisterForm/RegisterForm';
import gsap from 'gsap/all';

const AuthTemplate = () => {
  let location = useLocation();
  const authWrapperRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      authWrapperRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.4, ease: 'ease-in-out' }
    );
  }, []);

  const { pathname } = location;

  return (
    <Wrapper ref={authWrapperRef}>
      {authLayout(pathname) ? (
        <LogInForm isLogIn={authLayout(pathname)} />
      ) : (
        <RegisterForm isLogIn={authLayout(pathname)} />
      )}
    </Wrapper>
  );
};

export default AuthTemplate;
