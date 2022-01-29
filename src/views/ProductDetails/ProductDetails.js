import React from 'react';
import PropTypes from 'prop-types';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import { Col, Container, Row } from 'styled-bootstrap-grid';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ProductsSection } from 'views/Products/Products.styles';
import { Button } from 'components/atoms/Button/Button.styles';

const ProductDetails = () => {
  const { products } = useSelector((state) => state.productsReducer);

  const { id } = useParams();

  const product = products.find((product) => product.id === id);

  const { name, description, price, images } = product;
  return (
    <MainTemplate>
      <Container>
        <ProductsSection>
          <Row>
            <Col md="4">
              {images.map((image) => (
                <img src={image.src} />
              ))}
            </Col>
            <Col md="7" offset="1">
              <h1>{name}</h1>
              <p>{description}</p>

              <div className="product__price">
                <Button>Dodaj do koszyka</Button>
                <select>
                  <option value="1">1</option>
                </select>
                <p>
                  <span>{price}</span>
                </p>
              </div>
            </Col>
          </Row>
        </ProductsSection>
      </Container>
    </MainTemplate>
  );
};

ProductDetails.propTypes = {};

export default ProductDetails;
