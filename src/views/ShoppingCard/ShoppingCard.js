import React from 'react';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import { Col, Container, Row } from 'styled-bootstrap-grid';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import BasketProduct from 'components/molecules/BasketProduct/BasketProduct';
import { Button } from 'components/atoms/Button/Button.styles';
import {
  SummaryTitle,
  SummaryContent,
  SummaryWrapper,
  BasketProductsWrapper,
} from './ShoppingCard.styles';
import { useDispatch } from 'react-redux';

const ShoppingCard = () => {
  const { basketProducts, price } = useSelector(
    (state) => state.shopActivitiesReducer
  );

  const dispatch = useDispatch();

  const handleRemoveProducts = () => {
    dispatch({ type: 'REMOVE_PRODUCTS_FROM_BASKET' });
    dispatch({ type: 'CHANGE_PRICE' });
  };

  return (
    <MainTemplate>
      <Container>
        {!basketProducts.length ? (
          <h2>Przykro mi, ale nie posaidasz żadnych produktóow w koszyku :(</h2>
        ) : (
          <Row>
            <Col lg="7">
              <BasketProductsWrapper>
                <h2>Wybrane produkty</h2>
                <button onClick={handleRemoveProducts}>Wyczyść koszyk</button>
                {basketProducts.map((basketProduct) => (
                  <BasketProduct basketProduct={basketProduct} />
                ))}
              </BasketProductsWrapper>
            </Col>
            <Col lg="4" lgOffset="1">
              <SummaryWrapper>
                <Button>Przejdź do logowania</Button>
                <SummaryTitle>Podsumowanie</SummaryTitle>
                <SummaryContent>
                  <h3>Cena za produkty</h3>
                  <h3>{price},00 zł</h3>
                </SummaryContent>
                <SummaryContent>
                  <h3>Łączna kwota</h3>
                  <h3>{price},00 zł</h3>
                </SummaryContent>

                <Button to="/next">Przejdź do dostawy i płatności </Button>
              </SummaryWrapper>
            </Col>
          </Row>
        )}
        <h3>Darmowa dostawa !</h3>
      </Container>
    </MainTemplate>
  );
};

ShoppingCard.propTypes = {};

export default ShoppingCard;
