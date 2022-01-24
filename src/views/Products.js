import React from 'react';
import PropTypes from 'prop-types';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import { Container } from 'styled-bootstrap-grid';
import { gql, useQuery } from '@apollo/client';

const GET_PRODUCTS = gql`
  query GetProducts {
    products {
      price
      name
      description
      short_description
      sale_price
      images {
        src
      }
    }
  }
`;

const Products = () => {
  const { loading, error, data: getProducts } = useQuery(GET_PRODUCTS);

  //const { products } = getProducts;

  if (getProducts) console.log(getProducts);
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
