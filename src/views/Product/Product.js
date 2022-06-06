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
    <Col md="6" lg="4" xl="3" key={id}>
      <ProductWrapper to={`/produkty/${id}`}>
        <ProductFigure>
          <ProductPicture>
            <ProductImg src={images[0].src} alt={name} />
            <ProductLinkWrapper>
              <ProductLink to={`/produkty/${id}`}>przejdź do produktu</ProductLink>
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

Product.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  images: PropTypes.array,
};

export default Product;
