import { createSlice } from '@reduxjs/toolkit';
import productsOperations from './products-operations';

const initialState = {
  products: null,
  productPDP: null,
  status: null,
  error: false,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: {
    [productsOperations.fetchProducts.fulfilled](state, action) {
      state.products = action.payload;
      state.status = action.meta.requestStatus;
    },
    [productsOperations.fetchProducts.pending](state, action) {
      state.status = action.meta.requestStatus;
    },
    [productsOperations.fetchProducts.rejected](state, action) {
      state.error = true;
      state.status = action.meta.requestStatus;
    },
    [productsOperations.fetchProductById.fulfilled](state, action) {
      state.productPDP = action.payload;
      state.status = action.meta.requestStatus;
    },
    [productsOperations.fetchProductById.pending](state, action) {
      state.status = action.meta.requestStatus;
    },
    [productsOperations.fetchProductById.rejected](state, action) {
      state.error = true;
      state.status = action.meta.requestStatus;
    },
    [productsOperations.editProduct.fulfilled](state, action) {
      state.status = action.meta.requestStatus;
    },
    [productsOperations.editProduct.pending](state, action) {
      state.status = action.meta.requestStatus;
    },
    [productsOperations.editProduct.rejected](state, action) {
      state.error = true;
      state.status = action.meta.requestStatus;
    },
  },
});

export default productsSlice.reducer;
