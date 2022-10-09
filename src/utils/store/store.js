import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../../features/cart/cartSlice.feature";
import userReducer from "../../features/user/userSlice.feature";
import categoriesReducer from "../../features/categories/categoriesSlice.feature";
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
    categories: categoriesReducer,
  },
});
