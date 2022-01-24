import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import { Section } from 'components/atoms/Section/Section.styles';
import { Col, Container, Row } from 'styled-bootstrap-grid';
import { Label } from 'components/atoms/Label/Label.styles';
import { useNavigate } from 'react-router-dom';

import {
  Input,
  InputWrapper,
  CheckboxWrapper,
} from 'components/atoms/Input/Input.styles';
import { Button } from 'components/atoms/Button/Button.styles';
import DontHaveAccount from '../DontHaveAccount/DontHaveAccount';
import Form from 'components/atoms/Form/Form';
import ErrorMessage from 'components/atoms/ErrorMessage/ErrorMessage';

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
  mutation Register(
    $name: String!
    $surname: String!
    $email: String!
    $password: String!
  ) {
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
  } = useForm();

  const [sendData, { data: responseData, loading, error }] =
    useMutation(REGISTER_USER);

  const onSubmit = async (data) => {
    const { data: response } = await sendData({
      variables: {
        name: data.name,
        surname: data.surname,
        email: data.email,
        password: data.password,
      },
    });
    console.log(response);

    if (response.register) {
      return setError('email', {
        type: 'manual',
        message: response.register,
      });
    } else
      return setCreatedUser(true), setTimeout(() => navigate('/zaloguj'), 3000);
  };

  return (
    <Section>
      <Container>
        <h1 className="h1">Zarejestruj się</h1>
        <Row>
          <Col md={6}>
            {!createdUser ? (
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Row>
                  <Col md={6}>
                    <InputWrapper>
                      <Label>Imię:*</Label>
                      <Input
                        type="text"
                        placeholder="Wprowadź imię"
                        {...register('name', {
                          required: nameRequired,
                          minLength: { value: 5, message: nameMinLength },
                        })}
                      />
                      <ErrorMessage message={errors.name} />
                    </InputWrapper>
                  </Col>
                  <Col md={6}>
                    <InputWrapper>
                      <Label>Nazwisko:*</Label>
                      <Input
                        type="text"
                        placeholder="Wprowadź nazwisko"
                        {...register('surname', {
                          required: surnameRequired,
                          minLength: { value: 5, message: surnameMinLength },
                          maxLength: 20,
                        })}
                      />
                      <ErrorMessage message={errors.surname} />
                    </InputWrapper>
                  </Col>
                  <Col md={12}>
                    <InputWrapper>
                      <Label>Email:*</Label>
                      <Input
                        type="email"
                        placeholder="Wprowadź adres e-mail"
                        {...register('email', {
                          required: emailRequired,
                          minLength: { value: 5, message: emailMinLength },
                          maxLength: 20,
                        })}
                      />
                      <ErrorMessage message={errors.email} />
                    </InputWrapper>
                  </Col>
                  <Col md={12}>
                    <InputWrapper>
                      <Label>Hasło:*</Label>
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
                    </InputWrapper>
                  </Col>
                  <Col md={12}>
                    <CheckboxWrapper>
                      <Input
                        type="checkbox"
                        id="rodo"
                        {...register('rodo', { required: rodoRequired })}
                      />
                      <Label htmlFor="rodo">Akceptuje regulamin sklepu*</Label>
                      <ErrorMessage message={errors.rodo} />
                    </CheckboxWrapper>
                  </Col>
                </Row>
                <Button type="submit">Zarejestruj się</Button>
              </Form>
            ) : (
              <p>Konto zostało stowrzone!</p>
            )}
          </Col>
          <Col md={6}>
            <DontHaveAccount isLogIn={isLogIn} />
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

RegisterForm.propTypes = {};

export default RegisterForm;
