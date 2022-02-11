import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import { Col, Container, Row } from 'styled-bootstrap-grid';
import { useSelector, useDispatch } from 'react-redux';
import Product from '../Product/Product';
import { ProductsSection, ProductsWrapper } from './Products.styles';
import Loader from 'components/molecules/Loader/Loader';
import Categories from 'components/organisms/Categories/Categories';
import { useParams } from 'react-router-dom';

const Products = () => {
  //const [categoryId,setCategoryId] = useState('');
  // REDUX STATE
  const products = useSelector((state) => state.productsReducer.products);
  //const loading = useSelector((state) => state.productsReducer.loading);
  const { id } = useParams();

  const detectCategory = (id, product) => {
    const productsCategory = product.categories.find((category) => {
      if (category.id === id) return product;
    });
    console.log(productsCategory);
  };
  //product.categories.filter((category) => category.id === id);

  return (
    <MainTemplate>
      <Container>
        <ProductsSection>
          <Categories />
          <ProductsWrapper>
            <Row>
              {products ? (
                products.map((product) => {
                  detectCategory(id, product);
                  return <Product product={product} key={product.id} />;
                })
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
