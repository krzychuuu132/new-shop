import types from './types';
import GetProducts from './operations';

const getProducts = {
  products: ['pierwszy produkt', 'drugi produkt'],
};

const productsReducer = (state = getProducts, action) => {
  switch (action.type) {
    case types.GET_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.product],
      };
    default:
      return state;
  }
};

const testReducer = (state = getProducts, action) => {
  switch (action.type) {
    case types.GET_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.product],
      };
    default:
      return state;
  }
};

export default { productsReducer, testReducer };
