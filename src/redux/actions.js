const { default: types } = require('./types');

const add = (item) => ({
  type: types.ADD_PRODUCTS,
  item,
});

export default {
  add,
};
