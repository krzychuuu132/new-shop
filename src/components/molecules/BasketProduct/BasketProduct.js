import React from 'react';
import PropTypes from 'prop-types';

const BasketProduct = ({ basketProduct: { name } }) => {
  console.log(name);
  return (
    <div></div>
      <h1>{name}</h1>
    </div>
  );
};

BasketProduct.propTypes = {};

export default BasketProduct;
