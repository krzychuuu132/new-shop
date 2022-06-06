const WooCommerceRestApi = require('@woocommerce/woocommerce-rest-api').default;
require('dotenv').config();

const api = new WooCommerceRestApi({
  url: process.env.PUBLIC_WORDPRESS_SITE_URL,
  consumerKey: process.env.WC_CONSUMER_KEY,
  consumerSecret: process.env.WC_CONSUMER_SECRET,
  version: 'wc/v3',
});

const getProducts = async (req, res) => {
  try {
    const { data } = await api.get('products', { per_page: 50 });
    return data;
  } catch (err) {
    throw new Error(err);
  }
};

const getProduct = async (id) => {
  try {
    const { data } = await api.get('products', {
      include: id,
    });
    return data[0];
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {
  getProducts,
  getProduct,
};
