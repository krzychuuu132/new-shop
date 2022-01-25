const { default: types } = require('./types');

const add = (products) => ({
  type: types.ADD_PRODUCTS,
  products,
});

export default {
  add,
};
