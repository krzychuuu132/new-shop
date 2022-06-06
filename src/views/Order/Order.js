import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import { Col, Container, Row } from 'styled-bootstrap-grid';
import Breadcrumb from 'components/molecules/Breadcrumb/Breadcrumb';
import Section from 'components/atoms/Section/Section';
import Form from 'components/atoms/Form/Form';
import Input from 'components/atoms/Input/Input';
import { Input as StyledInput } from 'components/atoms/Input/Input.styles';
import BasketProduct from 'components/molecules/BasketProduct/BasketProduct';
import Button from 'components/atoms/Button/Button';
import ErrorMessage from 'components/atoms/ErrorMessage/ErrorMessage';
import { useForm } from 'react-hook-form';
import { Wrapper, Fieldset, InputTextWrapper, SummaryWrapper, SummaryValue } from './Order.styles';
import { useNavigate } from 'react-router-dom';

const errorMessages = {
  nameRequired: 'Pole Imię jest wymagane',
  nameMinLength: 'Pole imię musi zawierać co najmniej 5 znaków',
  streetRequired: 'Pole Ulica i numer jest wymagane',
  streetMinLength: 'Pole Ulica i numer musi zawierać co najmniej 5 znaków',
  codeRequired: 'Pole Kod pocztowy jest wymagane',
  codeMinLength: 'Pole Kod pocztowy musi zawierać co najmniej 5 znaków',
  townRequired: 'Pole Miejscowość jest wymagane',
  townMinLength: 'Pole Miejscowość musi zawierać co najmniej 5 znaków',
};

const Order = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  let navigate = useNavigate();

  const {
    basketProducts,
    price,
    orderDetails: { delivery, payment },
  } = useSelector((state) => state.shopActivitiesReducer);

  const handleRadioChange = (e) => {
    const { name, value } = e.target;
    console.log('change');
    dispatch({ type: 'CHANGE_ORDER_VALUES', name, value });
  };

  const handleChangeStep = () => {
    navigate('/podsumowanie');
  };

  return (
    <MainTemplate>
      <Container>
        <Breadcrumb title="Metody dostawy i płatności" />
        <Section>
          <h2>Dostawa i płatność</h2>
          <Wrapper>
            <Row>
              <Col xl="6">
                <Form id="orderForm" onSubmit={handleSubmit(handleChangeStep)}>
                  <h3>Sposób dostawy</h3>
                  <Fieldset>
                    <Input
                      type="radio"
                      id="courier"
                      name="delivery"
                      value="Kurier – InPost, UPS, FedEx, DT"
                      label="Kurier – InPost, UPS, FedEx, DTS"
                      onChange={handleRadioChange}
                      checked
                    />
                    <Input type="radio" id="parcel" name="delivery" value="Paczkomaty 24/7" label="Paczkomaty 24/7" onChange={handleRadioChange} />
                  </Fieldset>
                </Form>
                <h3>Metoda płatności</h3>
                <Fieldset>
                  <Input
                    type="radio"
                    id="online"
                    name="payment"
                    value="Płatność online"
                    label="Płatność online"
                    onChange={handleRadioChange}
                    checked
                  />
                  <Input
                    type="radio"
                    id="paymentCard"
                    name="payment"
                    value="Karta płatnicza online"
                    label="Karta płatnicza online"
                    onChange={handleRadioChange}
                  />
                  <Input type="radio" id="blik" name="payment" value="BLIK" label="BLIK" onChange={handleRadioChange} />
                  <Input
                    type="radio"
                    id="deliveryCash"
                    name="payment"
                    value="Przy odbiorze 20,00 zł"
                    label="Przy odbiorze 20,00 zł"
                    onChange={handleRadioChange}
                  />
                </Fieldset>
                <h3>Dane odbiorcy</h3>
                <InputTextWrapper>
                  <StyledInput
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Imię i nazwisko"
                    onChange={handleRadioChange}
                    {...register('name', {
                      required: errorMessages.nameRequired,
                      minLength: { value: 5, message: errorMessages.nameMinLength },
                      maxLength: 40,
                    })}
                  />
                  <ErrorMessage message={errors.name} />
                  <StyledInput
                    type="text"
                    id="street"
                    name="street"
                    placeholder="Ulica i numer"
                    onChange={handleRadioChange}
                    {...register('street', {
                      required: errorMessages.streetRequired,
                      minLength: { value: 5, message: errorMessages.streetMinLength },
                      maxLength: 40,
                    })}
                  />
                  <ErrorMessage message="Coś poszło nie tak" message={errors.street} />
                  <StyledInput
                    type="text"
                    id="code"
                    name="code"
                    placeholder="Kod pocztowy"
                    onChange={handleRadioChange}
                    required
                    {...register('code', {
                      required: errorMessages.codeRequired,
                      minLength: { value: 5, message: errorMessages.codeMinLength },
                      maxLength: 40,
                    })}
                  />
                  <ErrorMessage message="Coś poszło nie tak" message={errors.code} />
                  <StyledInput
                    type="text"
                    id="town"
                    name="town"
                    placeholder="Miejscowość"
                    onChange={handleRadioChange}
                    required
                    {...register('town', {
                      required: errorMessages.townRequired,
                      minLength: { value: 5, message: errorMessages.townMinLength },
                      maxLength: 40,
                    })}
                  />
                  <ErrorMessage message="Coś poszło nie tak" message={errors.town} />
                </InputTextWrapper>
              </Col>
              <Col xl="5" xlOffset="1">
                <SummaryWrapper>
                  {basketProducts.map((basketProduct, index) => (
                    <BasketProduct basketProduct={basketProduct} key={index} deleteButton={false} />
                  ))}
                  <SummaryValue>
                    <p>Sposób dotawy:</p>
                    <p>
                      <strong>{delivery}</strong>
                    </p>
                  </SummaryValue>
                  <SummaryValue>
                    <p>Metoda Płatności:</p>
                    <p>
                      <strong>{payment}</strong>
                    </p>
                  </SummaryValue>
                  <SummaryValue>
                    <p>Wartość koszyka</p>
                    <p>{price},00 zł</p>
                  </SummaryValue>
                  <SummaryValue>
                    <p>Dostawa</p>
                    <p>0,00 zł</p>
                  </SummaryValue>
                  <SummaryValue>
                    <p>Płatność</p>
                    <p>0,00 zł</p>
                  </SummaryValue>
                  <SummaryValue>
                    <p>
                      <strong>Do zapłaty</strong>
                    </p>
                    <p>
                      <strong>{price},00 zł</strong>
                    </p>
                  </SummaryValue>
                  <Button title="Przejdź do podsumowania" form="orderForm" type="submit">
                    Przejdź do podsumowania
                  </Button>
                </SummaryWrapper>
              </Col>
            </Row>
          </Wrapper>
        </Section>
      </Container>
    </MainTemplate>
  );
};

Order.propTypes = {};

export default Order;
