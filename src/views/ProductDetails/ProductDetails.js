import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import { Col, Container, Row } from 'styled-bootstrap-grid';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ProductsSection } from 'views/Products/Products.styles';
import { Button } from 'components/atoms/Button/Button.styles';
import {
  ProductDetailsImage,
  ProductsDetailsContent,
} from './ProductDetails.styles';

const ProductDetails = () => {
  const [productSize, setProductSize] = useState('XS');

  // REDUX STATE
  const { products } = useSelector((state) => state.productsReducer);

  const dispatch = useDispatch();

  const { id } = useParams();

  const product = products.find((product) => product.id === id);

  const { name, description, price, images } = product;

  const handlechangeSize = (e) => setProductSize(e.target.value);

  const handleAddToBasket = () => {
    const newProduct = Object.assign({}, product);
    newProduct.size = productSize;

    dispatch({ type: 'ADD_TO_SHOPPING_CARD', product: newProduct });
  };

  console.log(productSize);

  return (
    <MainTemplate>
      <Container>
        <ProductsSection>
          <Row>
            <Col md="6">
              <ProductDetailsImage>
                {images.map((image) => (
                  <img src={image.src} />
                ))}
              </ProductDetailsImage>
            </Col>
            <Col md="5" offset="1">
              <ProductsDetailsContent>
                <h1>{name}</h1>
                <p>{description}</p>

                <div className="product__price">
                  <Button onClick={handleAddToBasket}>Dodaj do koszyka</Button>
                  <select value={productSize} onChange={handlechangeSize}>
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="XL">XL</option>
                  </select>
                  <p>
                    <span>{price}</span>
                  </p>
                </div>
              </ProductsDetailsContent>
            </Col>
          </Row>
        </ProductsSection>
      </Container>
    </MainTemplate>
  );
};

ProductDetails.propTypes = {};

export default ProductDetails;
