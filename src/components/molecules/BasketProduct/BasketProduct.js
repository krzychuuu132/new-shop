import React from 'react';
import PropTypes from 'prop-types';

import {
  ProductContent,
  ProductImg,
  ProductQuantity,
  ProductDetails,
  ProductSum,
  ProductTitle,
  Wrapper,
} from './BasketProduct.styles';

const BasketProduct = ({
  basketProduct: { name, price, images, categories, quantity },
}) => {
  console.log(name);
  return (
    <Wrapper>
      <ProductContent>
        <ProductImg />
        <ProductTitle />
        <ProductQuantity />
      </ProductContent>
      <ProductDetails>
        <button>usuń</button>

        <ProductSum>
          <span>
            {quantity}x{price},00 zł
          </span>
        </ProductSum>
      </ProductDetails>
    </Wrapper>
  );
};

BasketProduct.propTypes = {};

export default BasketProduct;
