const getCart = state => state.cart.cart;
const getStatus = state => state.cart.status;
const getError = state => state.cart.error;
const getQuantity = state => state.cart.quantity;

const cartSelectors = {
  getCart,
  getStatus,
  getError,
  getQuantity,
};

export default cartSelectors;
