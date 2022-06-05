import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import { Col, Container, Row } from 'styled-bootstrap-grid';
import Breadcrumb from 'components/molecules/Breadcrumb/Breadcrumb';
import Section from 'components/atoms/Section/Section';
import styled from 'styled-components';
import Form from 'components/atoms/Form/Form';
import Input from 'components/atoms/Input/Input';
import { InputWrapper, Label } from 'components/atoms/Input/Input.styles';
import BasketProduct from 'components/molecules/BasketProduct/BasketProduct';
import { ProductDetails, ProductSum } from 'components/molecules/BasketProduct/BasketProduct.styles';
import Button from 'components/atoms/Button/Button';
import ButtonLink from 'components/atoms/ButtonLink/ButtonLink';
import { ButtonText } from 'components/atoms/Button/Button.styles';

const Wrapper = styled.div`
  form {
    gap: 0;
  }
`;

const Fieldset = styled.fieldset`
  border: none;
  display: flex;
  flex-direction: column;
  gap: 1rem 0;
  margin-bottom: 4rem;
  ${InputWrapper} {
    display: flex;
    gap: 0 2rem;
    align-items: center;
    padding: 2rem 3rem;
    border: 0.1rem solid ${({ theme }) => theme.colors.black};
    border-radius: ${({ theme }) => theme.radius.primary};
    input {
      width: auto;
    }
  }

  ${Label} {
    position: static;
    pointer-events: all;
    width: 100%;
    font-weight: bold;
  }
`;

const InputTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem 0;
`;

const SummaryWrapper = styled.div`
  ${ProductDetails} {
    justify-content: end;
  }

  p {
    margin-bottom: 1rem;
  }
`;

const SummaryValue = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Order = (props) => {
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState({
    delivery: 'Kurier – InPost, UPS, FedEx, DTS',
    payment: 'Płatność online',
    name: '',
    street: '',
    code: '',
    town: '',
  });
  const { basketProducts, price } = useSelector((state) => state.shopActivitiesReducer);

  const handleRadioChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: 'CHANGE_ORDER_VALUES', name, value });
  };

  const handleChangeStep = (e) => {
    e.preventDefault();
    const test = Object.entries(formValues);
    console.log(test);
  };

  return (
    <MainTemplate>
      <Container>
        <Breadcrumb title="Metody dostawy i płatności" />
        <Section>
          {console.log(formValues)}
          <h2>Dostawa i płatność</h2>
          <Wrapper>
            <Row>
              <Col xl="6">
                <Form id="orderForm" onSubmit={handleChangeStep}>
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
                  <Input type="text" id="name" name="name" placeholder="Imię i nazwisko" onChange={handleRadioChange} />
                  <Input type="text" id="street" name="street" placeholder="Ulica i numer" onChange={handleRadioChange} />
                  <Input type="text" id="code" name="code" placeholder="Kod pocztowy" onChange={handleRadioChange} />
                  <Input type="text" id="town" name="town" placeholder="Miejscowość" onChange={handleRadioChange} />
                </InputTextWrapper>
              </Col>
              <Col xl="5" lgOffset="1">
                <SummaryWrapper>
                  {basketProducts.map((basketProduct, index) => (
                    <BasketProduct basketProduct={basketProduct} key={index} deleteButton={false} />
                  ))}
                  <p>Sposób dotawy:</p>
                  <p>
                    <strong>{formValues.delivery}</strong>
                  </p>
                  <p>Metoda Płatności:</p>
                  <p>
                    <strong>{formValues.payment}</strong>
                  </p>
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
