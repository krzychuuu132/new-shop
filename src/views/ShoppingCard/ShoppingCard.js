import React from 'react';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import { Col, Container, Row } from 'styled-bootstrap-grid';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const ShoppingCard = () => {
  const shopData = useSelector((state) => state.shopActivitiesReducer);

  return (
    <MainTemplate>
      <Container>
        {!shopData.basketProducts.length ? (
          <h2>Przykro mi, ale nie posaidasz żadnych produktóow w koszyku :(</h2>
        ) : (
          'są produkty'
        )}
      </Container>
    </MainTemplate>
  );
};

ShoppingCard.propTypes = {};

export default ShoppingCard;
