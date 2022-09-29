import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartVisible: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCartVisible: (state) => {
      state.cartVisible = !state.cartVisible;
    },
  },
});

export const { toggleCartVisible } = cartSlice.actions;

export default cartSlice.reducer;
