import types from './types';

const getProducts = {
  products: [],
  loading: true,
};

const shopActivities = {
  basketProducts: [],
  price: 0,
};

const productsReducer = (state = getProducts, action) => {
  switch (action.type) {
    case types.ADD_PRODUCTS:
      return {
        ...state,
        products: action.products,
      };

    case types.LOADING:
      return {
        loading: action.loading,
      };
    default:
      return state;
  }
};

const shopActivitiesReducer = (state = shopActivities, action) => {
  switch (action.type) {
    case types.ADD_TO_SHOPPING_CARD:
      return {
        ...state,
        basketProducts: [...state.basketProducts, action.product],
      };
    default:
      return state;
  }
};

export default { productsReducer, shopActivitiesReducer };
