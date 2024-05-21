const axios = require('axios');

const SHOPIFY_STORE_URL = process.env.SHOPIFY_STORE_URL
const SHOPIFY_API_KEY = process.env.SHOPIFY_API_KEY 
const SHOPIFY_API_SECRET_KEY = process.env.SHOPIFY_API_SECRET_KEY 
const SHOPIFY_ACCESS_TOKEN = process.env.SHOPIFY_ACCESS_TOKEN

const headers = {
    'Content-Type': 'application/json',
    [`${SHOPIFY_API_KEY}`]: `${SHOPIFY_API_SECRET_KEY}`,
    'X-Shopify-Access-Token': SHOPIFY_ACCESS_TOKEN
};

exports.createProduct = async (productData) => {
  const response = await axios.post(SHOPIFY_STORE_URL, productData, { headers });
  return response;
};

exports.updateProduct = async (id, productData) => {
  const response = await axios.put(`${SHOPIFY_STORE_URL}/${id}`, productData, { headers });
  return response.data;
};

exports.deleteProduct = async (id) => {
  await axios.delete(`${SHOPIFY_STORE_URL}/${id}`, { headers });
};