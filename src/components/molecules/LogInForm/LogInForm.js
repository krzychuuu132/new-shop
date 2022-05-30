import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Section } from 'components/atoms/Section/Section.styles';
import { Col, Container, Row } from 'styled-bootstrap-grid';
import { Input } from 'components/atoms/Input/Input.styles';
import Button from 'components/atoms/Button/Button';
import DontHaveAccount from '../DontHaveAccount/DontHaveAccount';
import Form from 'components/atoms/Form/Form';

import { useForm } from 'react-hook-form';
import ErrorMessage from 'components/atoms/ErrorMessage/ErrorMessage';
import { gql, useLazyQuery, useMutation, useQuery } from '@apollo/client';
import { AuthContext } from 'providers/IsAuthProvider';
import { useNavigate } from 'react-router-dom';
import { wait } from 'helpers/wait';

const errorMessages = {
  nameRequired: 'Pole Imię jest wymagane',
  nameMinLength: 'Pole imię musi zawierać co najmniej 5 znaków',
  surnameRequired: 'Pole Nazwisko jest wymagane',
  surnameMinLength: 'Pole Nazwisko musi zawierać co najmniej 5 znaków',
  emailRequired: 'Pole e-mail jest wymagane',
  emailMinLength: 'Pole e-mail musi zawierać co najmniej 5 znaków',
  passwordRequired: 'Pole hasło jest wymagane',
  passwordMinLength: 'Pole hasło musi zawierać co najmniej 5 znaków',
  rodoRequired: 'To pole jest wymagane',
};

const REGISTER_USER = gql`
  query Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      userId
      token
      tokenExpiration
      error {
        type
        message
      }
    }
  }
`;

const LogInForm = ({ isLogIn }) => {
  const [loadingData, setLoadingData] = useState(true);
  const [sendData, { loading, error }] = useLazyQuery(REGISTER_USER, {
    onCompleted: (data) => setLoadingData(false),
  });

  let navigate = useNavigate();

  const {
    nameRequired,
    nameMinLength,
    surnameRequired,
    surnameMinLength,
    emailRequired,
    emailMinLength,
    passwordRequired,
    passwordMinLength,
    rodoRequired,
  } = errorMessages;

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm();

  const { addAuthData, jwt } = useContext(AuthContext);

  const onSubmit = async (data) => {
    console.log(loadingData);
    clearErrors();
    try {
      const { data: response, data: test } = await sendData({
        variables: {
          email: data.email,
          password: data.password,
        },
      });
      console.log(test);
      if (response.login.error) {
        const { type, message } = response.login.error;
        setError(type, {
          type: 'manual',
          message: message,
        });
      } else {
        // const { token, userId, tokenExpiration } = response.login;
        // addAuthData(token, userId, tokenExpiration);
        await wait(() => navigate('/'), 1000);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Section>
      <Container>
        <h1>Zaloguj się</h1>
        {console.log(loadingData)}
        <Row>
          <Col md={6}>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Input
                type="text"
                placeholder="Wprowadź adres e-mail"
                {...register('email', {
                  required: emailRequired,
                  minLength: { value: 5, message: emailMinLength },
                  maxLength: 20,
                })}
              />
              <ErrorMessage message={errors.email} />
              <Input
                type="password"
                placeholder="Wprowadź hasło"
                {...register('password', {
                  required: passwordRequired,
                  minLength: { value: 5, message: passwordMinLength },
                  maxLength: 20,
                })}
              />
              <ErrorMessage message={errors.password} />
              <Button type="submit">Zaloguj się</Button>
            </Form>
          </Col>
          <Col md={5} mdOffset={1} xl={4} xlOffset={2}>
            <DontHaveAccount isLogIn={isLogIn} />
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

LogInForm.propTypes = {};

export default LogInForm;
