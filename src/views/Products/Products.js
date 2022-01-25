import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import { Col, Container, Row } from 'styled-bootstrap-grid';
import { gql, useQuery } from '@apollo/client';
import { useSelector, useDispatch } from 'react-redux';
import Product from '../Product/Product';
import { ProductsSection, ProductsWrapper } from './Products.styles';

const GET_PRODUCTS = gql`
  query GetProducts {
    products {
      id
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

  // REDUX STATE
  const products = useSelector((state) => state.productsReducer.products);

  const dispatch = useDispatch();

  useEffect(() => {
    if (getProducts) {
      dispatch({ type: 'ADD_PRODUCTS', products: getProducts.products });
    }
  }, [getProducts]);

  return (
    <MainTemplate>
      <Container>
        <ProductsSection>
          <ProductsWrapper>
            {products.map((product) => console.log(product))}
            <Row>
              {products ? (
                products.map((product) => <Product product={product} />)
              ) : (
                <p>Coś poszło nie tak...</p>
              )}
            </Row>
          </ProductsWrapper>
        </ProductsSection>
      </Container>
    </MainTemplate>
  );
};

Products.propTypes = {};

export default Products;
