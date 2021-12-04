import React from 'react';
import PropTypes from 'prop-types';
import { Section } from 'components/atoms/Section/Section.styles';
import { Col, Container, Row } from 'styled-bootstrap-grid';
import { Label } from 'components/atoms/Label/Label.styles';
import { Input, InputWrapper, CheckboxWrapper } from 'components/atoms/Input/Input.styles';
import { Button } from 'components/atoms/Button/Button.styles';
import DontHaveAccount from '../DontHaveAccount/DontHaveAccount';
import Form from 'components/atoms/Form/Form';

const RegisterForm = ({ isLogIn }) => {
  return (
    <Section>
      <Container>
        <h1 className="h1">Zarejestruj się</h1>
        <Row>
          <Col md={6}>
            <Form>
              <Row>
                <Col md={6}>
                  <InputWrapper>
                    <Label>Imię:*</Label>
                    <Input type="text" placeholder="Wprowadź imię" />
                  </InputWrapper>
                </Col>
                <Col md={6}>
                  <InputWrapper>
                    <Label>Nazwisko:*</Label>
                    <Input type="text" placeholder="Wprowadź nazwisko" />
                  </InputWrapper>
                </Col>
                <Col md={12}>
                  <InputWrapper>
                    <Label>Email:*</Label>
                    <Input type="email" placeholder="Wprowadź adres e-mail" />
                  </InputWrapper>
                </Col>
                <Col md={12}>
                  <InputWrapper>
                    <Label>Hasło:*</Label>
                    <Input type="password" placeholder="Wprowadź hasło" />
                  </InputWrapper>
                </Col>
                <Col md={12}>
                  <CheckboxWrapper>
                    <Input type="checkbox" id="rodo" />
                    <Label htmlFor="rodo">Akceptuje regulamin sklepu*</Label>
                  </CheckboxWrapper>
                </Col>
              </Row>
              <Button type="submit">Zarejestruj się</Button>
            </Form>
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
