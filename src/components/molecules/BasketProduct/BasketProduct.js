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

import BasketIcon from 'assets/icons/basket.png';

const BasketProduct = ({
  basketProduct: { name, price, images, categories, quantity, id, size },
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
          {size ? <ProductQuantity>Rozmiar: {size}</ProductQuantity> : null}
        </ProductTitle>
      </ProductContent>
      <ProductDetails>
        <button onClick={() => handleRemoveProduct(id)}>
          <img src={BasketIcon} alt="ikona kosza" />
        </button>

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
