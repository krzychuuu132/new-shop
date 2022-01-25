import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'styled-bootstrap-grid';
import {
  ProductDescription,
  ProductFigCaption,
  ProductFigure,
  ProductImg,
  ProductLink,
  ProductLinkWrapper,
  ProductPicture,
  ProductText,
  ProductWrapper,
} from './Product.styles';

const Product = ({ product: { id, name, images } }) => {
  return (
    <Col md="3" key={id}>
      <ProductWrapper>
        <ProductFigure>
          <ProductPicture>
            <ProductImg src={images[0].src} alt={name} />
            <ProductLinkWrapper>
              <ProductLink to="/#">przejdź do produktu</ProductLink>
            </ProductLinkWrapper>
          </ProductPicture>
          <ProductFigCaption>
            <ProductDescription>
              <ProductText>{name}</ProductText>
            </ProductDescription>
          </ProductFigCaption>
        </ProductFigure>
      </ProductWrapper>
    </Col>
  );
};

Product.propTypes = {};

export default Product;
