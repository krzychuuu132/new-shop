import React from 'react';
import PropTypes from 'prop-types';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import { Container } from 'styled-bootstrap-grid';

const Products = () => {
  return (
    <MainTemplate>
      <Container>
        <h1>Produkty!</h1>
      </Container>
    </MainTemplate>
  );
};

Products.propTypes = {};

export default Products;
