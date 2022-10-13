const getProducts = state => state.products.products;
const getProduct = state => state.products.productPDP;
const getStatus = state => state.products.status;
const getError = state => state.products.error;

const productsSelectors = {
  getProducts,
  getProduct,
  getStatus,
  getError,
};

export default productsSelectors;
