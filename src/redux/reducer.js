import types from './types';

const getProducts = {
  products: [],
};

const productsReducer = (state = getProducts, action) => {
  switch (action.type) {
    case types.ADD_PRODUCTS:
      console.log(action.products);
      return {
        ...state,
        products: action.products,
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
