import React, { useRef, useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import { Section } from 'components/atoms/Section/Section.styles';
import { Col, Container, Row } from 'styled-bootstrap-grid';
import { useNavigate } from 'react-router-dom';

import { Input, Label } from 'components/atoms/Input/Input.styles';
import { Button } from 'components/atoms/Button/Button.styles';
import DontHaveAccount from '../DontHaveAccount/DontHaveAccount';
import Form from 'components/atoms/Form/Form';
import ErrorMessage from 'components/atoms/ErrorMessage/ErrorMessage';
import { CheckboxWrapper } from 'components/atoms/Input/Input.styles';

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
  mutation Register($name: String!, $surname: String!, $email: String!, $password: String!) {
    register(name: $name, surname: $surname, email: $email, password: $password)
  }
`;

const RegisterForm = ({ isLogIn }) => {
  const [createdUser, setCreatedUser] = useState(false);

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
    watch,
  } = useForm();

  const [sendData, { data: responseData, loading, error }] = useMutation(REGISTER_USER);

  console.log(watch());

  const onSubmit = async (data) => {
    const { data: response } = await sendData({
      variables: {
        name: data.name,
        surname: data.surname,
        email: data.email,
        password: data.password,
      },
    });
    // IF EMAIL IS ALREADY EXIST IN DATABASE
    if (response.register) {
      return setError('email', {
        type: 'manual',
        message: response.register,
      });
    } else return setCreatedUser(true), setTimeout(() => navigate('/zaloguj'), 3000);
  };

  return (
    <Section>
      <Container>
        <h1 className="h1">Zarejestruj się</h1>
        <Row>
          <Col md={7}>
            {!createdUser ? (
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Row>
                  <Col md={6}>
                    <Input
                      type="text"
                      placeholder="Wprowadź imię"
                      {...register('name', {
                        required: nameRequired,
                        minLength: { value: 5, message: nameMinLength },
                      })}
                    />
                    <ErrorMessage message={errors.name} isRegister={true} />
                  </Col>
                  <Col md={6}>
                    <Input
                      type="text"
                      placeholder="Wprowadź nazwisko"
                      {...register('surname', {
                        required: surnameRequired,
                        minLength: { value: 5, message: surnameMinLength },
                        maxLength: 20,
                      })}
                    />
                    <ErrorMessage message={errors.surname} isRegister={true} />
                  </Col>
                  <Col md={12}>
                    <Input
                      type="email"
                      placeholder="Wprowadź adres e-mail"
                      {...register('email', {
                        required: emailRequired,
                        minLength: { value: 5, message: emailMinLength },
                        maxLength: 20,
                      })}
                    />
                    <ErrorMessage message={errors.email} isRegister={true} />
                  </Col>
                  <Col md={12}>
                    <Input
                      type="password"
                      placeholder="Wprowadź hasło"
                      {...register('password', {
                        required: passwordRequired,
                        minLength: { value: 5, message: passwordMinLength },
                        maxLength: 20,
                      })}
                    />
                    <ErrorMessage message={errors.password} isRegister={true} />
                  </Col>
                  <Col md={12}>
                    <CheckboxWrapper>
                      <Input type="checkbox" id="rodo" {...register('rodo', { required: rodoRequired })} />
                      <Label htmlFor="rodo">*Akceptuję REGULAMIN sklepu</Label>
                    </CheckboxWrapper>
                    <ErrorMessage message={errors.rodo} isRegister={true} />
                  </Col>
                </Row>
                <Button type="submit">Zarejestruj się</Button>
              </Form>
            ) : (
              <h2>Konto zostało stworzone!</h2>
            )}
          </Col>
          <Col md={4} xl={3} mdOffset={1} xlOffset={2}>
            <DontHaveAccount isLogIn={isLogIn} />
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

RegisterForm.propTypes = {};

export default RegisterForm;
