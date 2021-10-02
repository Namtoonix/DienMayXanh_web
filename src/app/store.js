import cartReducer from '../features/Cart/CartSlice';
import productsReducer from '../features/Products/ProductSlice';
const { configureStore } = require('@reduxjs/toolkit');

const rootReducer = {
  cart: cartReducer,
  products: productsReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
