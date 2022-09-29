import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../../features/cart/cartSlice.feature";
export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
