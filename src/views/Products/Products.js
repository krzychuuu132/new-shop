import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import { Col, Container, Row } from 'styled-bootstrap-grid';
import { useSelector, useDispatch } from 'react-redux';
import Product from '../Product/Product';
import { ProductsSection, ProductsWrapper } from './Products.styles';
import Loader from 'components/molecules/Loader/Loader';

const Products = () => {
  // REDUX STATE
  const products = useSelector((state) => state.productsReducer.products);
  //const loading = useSelector((state) => state.productsReducer.loading);

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
