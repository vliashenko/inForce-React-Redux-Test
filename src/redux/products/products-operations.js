import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4000';

const fetchProducts = createAsyncThunk(
  '/products/FetchProducts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/data');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const fetchProductById = createAsyncThunk(
  '/products/FetchProductById',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/data/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const editProduct = createAsyncThunk(
  '/products/EditProducts',
  async (products, { rejectWithValue }) => {
    try {
      const { data } = await axios.put(`/data/${products.id}`, products);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const editProductCommentary = createAsyncThunk(
  '/products/EditProductCommentary',
  async (products, { rejectWithValue }) => {
    try {
      const { data } = await axios.put(`/data/${products.id}`, products);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const productsOperations = {
  fetchProducts,
  fetchProductById,
  editProduct,
  editProductCommentary,
};

export default productsOperations;
