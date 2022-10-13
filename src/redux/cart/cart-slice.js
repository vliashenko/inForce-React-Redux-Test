import { createSlice } from '@reduxjs/toolkit';
import cartOperations from './cart-operations';

const initialState = {
  cart: [],
  quantity: 0,
  status: null,
  error: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.status = null;
      state.cart.push(action.payload);
    },
    deleteProduct: (state, action) => {
      state.quantity -= 1;
      state.status = null;
      state.cart = state.cart.filter(item => item.id !== action.payload);
    },
    resetCart: (state, _) => {
      state.quantity = 0;
      state.status = null;
      state.cart = [];
    },
  },
  extraReducers: {
    [cartOperations.fetchCart.fulfilled](state, action) {
      state.cart = action.payload;
      state.status = action.meta.requestStatus;
    },
    [cartOperations.fetchCart.pending](state, action) {
      state.status = action.meta.requestStatus;
    },
    [cartOperations.fetchCart.rejected](state, action) {
      state.error = true;
      state.status = action.meta.requestStatus;
    },
    [cartOperations.addToCart.fulfilled](state, action) {
      state.cart = [];
      state.quantity = 0;
      state.status = action.meta.requestStatus;
    },
    [cartOperations.addToCart.pending](state, action) {
      state.status = action.meta.requestStatus;
    },
    [cartOperations.addToCart.rejected](state, action) {
      state.error = true;
      state.status = action.meta.requestStatus;
    },
  },
});

export const { addProduct, deleteProduct, resetCart } = cartSlice.actions;
export default cartSlice.reducer;
