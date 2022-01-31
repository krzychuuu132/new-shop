const { default: types } = require('./types');

const add = (products) => ({
  type: types.ADD_PRODUCTS,
  products,
});

const setLoading = (loading) => ({
  type: types.LOADING,
  loading,
});

const setShoppingCard = (product) => ({
  type: types.ADD_TO_SHOPPING_CARD,
  product,
});

export default {
  add,
  setLoading,
  setShoppingCard,
};
