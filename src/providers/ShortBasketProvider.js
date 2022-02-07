import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const ShortBasketContext = React.createContext({
  isShortBasketActive: false,
  setShortBasketState: () => {},
});

const ShortBasketProvider = ({ children }) => {
  const [shortBasket, setShortBasket] = useState(false);

  const setShortBasketState = () => setShortBasket(!shortBasket);

  return (
    <ShortBasketContext.Provider
      value={{
        isShortBasketActive: shortBasket,
        setShortBasketState,
      }}
    >
      {children}
    </ShortBasketContext.Provider>
  );
};

ShortBasketProvider.propTypes = {};

export default ShortBasketProvider;
