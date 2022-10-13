import { configureStore } from '@reduxjs/toolkit';
import { productsReducer } from './products';
import { cartReducer } from './cart';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const middleware = getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  });

const cartPersistConfig = {
  key: 'cart',
  storage,
  blacklist: ['products'],
};

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: persistReducer(cartPersistConfig, cartReducer),
  },
  middleware,
});

export const persistor = persistStore(store);
