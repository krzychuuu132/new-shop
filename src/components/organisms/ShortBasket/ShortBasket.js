import React from 'react';
import PropTypes from 'prop-types';
import { ShortBasketWrapper } from './ShortBasket.styles';

const ShortBasket = (props) => {
  return (
    <ShortBasketWrapper>
      <div>
        <h2>Twój koszyk</h2> <button>X</button>
      </div>

      <div class="products-body">Koszyk jest pusty</div>

      <p>
        <strong>Łączna kwota: 0,00zł</strong>
      </p>

      <a href="#">Przejdz do koszyka</a>
    </ShortBasketWrapper>
  );
};

ShortBasket.propTypes = {};

export default ShortBasket;
