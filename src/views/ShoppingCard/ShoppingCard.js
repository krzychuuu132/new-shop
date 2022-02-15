import React from 'react';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import { Col, Container, Row } from 'styled-bootstrap-grid';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import BasketProduct from 'components/molecules/BasketProduct/BasketProduct';
import { Button } from 'components/atoms/Button/Button.styles';

const ShoppingCard = () => {
  const { basketProducts } = useSelector(
    (state) => state.shopActivitiesReducer
  );

  console.log(basketProducts);

  return (
    <MainTemplate>
      <Container>
        {!basketProducts.length ? (
          <h2>Przykro mi, ale nie posaidasz żadnych produktóow w koszyku :(</h2>
        ) : (
          <Row>
            <Col lg="7">
              <h2>Wybrane produkty</h2>
              {basketProducts.map((basketProduct) => (
                <BasketProduct basketProduct={basketProduct} />
              ))}
            </Col>
            <Col lg="4" lgOffset="1">
              <Button>Przejdź do logowania</Button>
              <h2>Podsumowanie</h2>
              Cena za produkty: 120,00 zostało
            </Col>
          </Row>
        )}
      </Container>
    </MainTemplate>
  );
};

ShoppingCard.propTypes = {};

export default ShoppingCard;
