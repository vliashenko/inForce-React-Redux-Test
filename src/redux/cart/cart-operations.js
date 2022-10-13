import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4000';

const fetchCart = createAsyncThunk(
  '/cart/FetchCart',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/cart');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const addToCart = createAsyncThunk(
  '/cart/AddToCart',
  async (products, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/cart', products);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const cartOperations = {
  fetchCart,
  addToCart,
};

export default cartOperations;
