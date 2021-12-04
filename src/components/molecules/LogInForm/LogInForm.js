import React from 'react';
import PropTypes from 'prop-types';
import { Section } from 'components/atoms/Section/Section.styles';
import { Col, Container, Row } from 'styled-bootstrap-grid';
import { Label } from 'components/atoms/Label/Label.styles';
import { Input, InputWrapper } from 'components/atoms/Input/Input.styles';
import Button from 'components/atoms/Button/Button';
import DontHaveAccount from '../DontHaveAccount/DontHaveAccount';
import Form from 'components/atoms/Form/Form';

const LogInForm = ({ isLogIn }) => {
  return (
    <Section>
      <Container>
        <h1>Zaloguj się</h1>
        <Row>
          <Col md={6}>
            <Form>
              <InputWrapper>
                <Label>Podaj email:</Label>
                <Input type="text" placeholder="Wprowadź adres e-mail" />
              </InputWrapper>
              <InputWrapper>
                <Label>Podaj hasło:</Label>
                <Input type="password" placeholder="Wprowadź hasło" />
              </InputWrapper>
              <Button type="submit">Zaloguj się</Button>
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

LogInForm.propTypes = {};

export default LogInForm;
