// api.js

const axios = require('axios');

const fetchProducts = async (token) => {
  try {
    const response = await axios.get('http://localhost:1337/api/products?populate=*', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error.message);
    throw error;
  }
};

module.exports = { fetchProducts };
