import React from 'react';
import PropTypes from 'prop-types';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import { Container, Row } from 'styled-bootstrap-grid';
import { useSelector } from 'react-redux';
import Product from '../Product/Product';
import { ProductsSection, ProductsWrapper } from './Products.styles';
import Categories from 'components/organisms/Categories/Categories';
import { useParams } from 'react-router-dom';
import Breadcrumb from 'components/molecules/Breadcrumb/Breadcrumb';
import Loader from 'components/molecules/Loader/Loader';

const Products = () => {
  // REDUX STATE
  const products = useSelector((state) => state.productsReducer.products);

  const { id } = useParams();

  const detectCategory = (id = '15', product) => {
    const productsCategory = product.categories.find((category) => category.id === id);
    return productsCategory;
  };

  return (
    <MainTemplate>
      <Container>
        <Breadcrumb title="Nasza oferta" />
        <ProductsSection>
          <h2>Filruj według kategorii :</h2>
          <Categories />
          <ProductsWrapper>
            <Row>
              {products.length ? (
                products.map((product) => (detectCategory(id, product) ? <Product product={product} key={product.id} /> : null))
              ) : (
                <Loader />
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
