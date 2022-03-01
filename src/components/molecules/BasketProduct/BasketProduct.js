import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

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
  basketProduct: { name, price, images, categories, quantity, id },
}) => {
  const dispatch = useDispatch();

  const handleRemoveProduct = (id) => {
    dispatch({ type: 'DELETE_FROM_SHOPPING_CARD', id });
    dispatch({ type: 'CHANGE_PRICE' });
  };

  return (
    <Wrapper>
      <ProductContent>
        <ProductImg src={images[0].src} />
        <ProductTitle>
          {name}
          <ProductQuantity>{quantity} szt</ProductQuantity>
        </ProductTitle>
      </ProductContent>
      <ProductDetails>
        <button onClick={() => handleRemoveProduct(id)}>usuń</button>

        <ProductSum>
          <span>
            {quantity} x {price},00 zł
          </span>
        </ProductSum>
      </ProductDetails>
    </Wrapper>
  );
};

BasketProduct.propTypes = {};

export default BasketProduct;
