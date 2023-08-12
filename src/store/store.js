import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth-slice';
import mealsReducer from './meals-slice';
import cartReducer from './cart-slice';
import whishlistReducer from './whishlist-slice';

export default configureStore({
  reducer: {
    auth: authReducer,
    meals: mealsReducer,
    cart: cartReducer,
    whishlist: whishlistReducer,
  },
});
