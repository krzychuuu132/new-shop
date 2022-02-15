import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import { Col, Container, Row } from 'styled-bootstrap-grid';
import { useSelector } from 'react-redux';
import Product from '../Product/Product';
import { ProductsSection, ProductsWrapper } from './Products.styles';
import Loader from 'components/molecules/Loader/Loader';
import Categories from 'components/organisms/Categories/Categories';
import { useParams } from 'react-router-dom';

const Products = () => {
  // REDUX STATE
  const products = useSelector((state) => state.productsReducer.products);

  const { id } = useParams();

  const detectCategory = (id = '15', product) => {
    const productsCategory = product.categories.find(
      (category) => category.id === id
    );
    return productsCategory;
  };

  return (
    <MainTemplate>
      <Container>
        <ProductsSection>
          <Categories />
          <ProductsWrapper>
            <Row>
              {products ? (
                products.map((product) =>
                  detectCategory(id, product) ? (
                    <Product product={product} key={product.id} />
                  ) : null
                )
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
