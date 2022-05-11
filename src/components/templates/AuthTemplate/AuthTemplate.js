import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { authLayout } from 'helpers/authLayout';
import LogInForm from 'components/molecules/LogInForm/LogInForm';
import RegisterForm from 'components/molecules/RegisterForm/RegisterForm';
import gsap from 'gsap/all';
import Footer from 'components/organisms/Footer/Footer';
import Breadcrumb from 'components/molecules/Breadcrumb/Breadcrumb';
import Section from 'components/atoms/Section/Section';
import { Container } from 'styled-bootstrap-grid';

const AuthTemplate = () => {
  let location = useLocation();
  const authWrapperRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(authWrapperRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.4, ease: 'ease-in-out' });
  }, []);

  const { pathname } = location;

  return (
    <>
      <Container>
        <Breadcrumb title="Zaloguj" />
      </Container>
      <Section>{authLayout(pathname) ? <LogInForm isLogIn={authLayout(pathname)} /> : <RegisterForm isLogIn={authLayout(pathname)} />}</Section>
      <Footer />
    </>
  );
};

export default AuthTemplate;
