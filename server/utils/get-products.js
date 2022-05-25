const WooCommerceRestApi = require('@woocommerce/woocommerce-rest-api').default;
require('dotenv').config();

const api = new WooCommerceRestApi({
  url: process.env.PUBLIC_WORDPRESS_SITE_URL,
  consumerKey: process.env.WC_CONSUMER_KEY,
  consumerSecret: process.env.WC_CONSUMER_SECRET,
  version: 'wc/v3',
});

const getProducts = async (req, res) => {
  const responsData = {
    success: false,
    products: [],
  };

  try {
    const { data } = await api.get('products', { per_page: 50 });

    responsData.success = true;
    responsData.products = data;

    return data;
  } catch (err) {
    responsData.error = err.message;
    return responsData;
  }
};

const getProduct = async (req, res) => {
  const responsData = {
    success: false,
    product: {},
  };

  try {
    const { data } = await api.get('products', {
      include: 21,
    });
    responsData.success = true;
    responsData.product = data;
    console.log(req, res);
    return data[0];
  } catch (err) {
    responsData.error = err.message;
  }
};

module.exports = {
  getProducts,
  getProduct,
};
