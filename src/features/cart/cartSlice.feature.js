import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartVisible: true,
  cartItems: [],
  cartTotal: 0,
  cartCount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCartVisible: (state) => {
      state.cartVisible = !state.cartVisible;
    },
    addItem: (state, action) => {
      const item = action.payload;
      const existingItem = state.cartItems.find(
        (cartItem) => cartItem.ID === item.ID
      );

      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.cartItems.push({ ...item, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      const item = action.payload;
      const existingItem = state.cartItems.find(
        (cartItem) => cartItem.ID === item.ID
      );
      if (existingItem.quantity === 1) {
        state.cartItems = state.cartItems.filter(
          (cartItem) => cartItem.ID !== item.ID
        );
      } else {
        existingItem.quantity -= 1;
      }
      state.cartCount -= 1;
      state.cartTotal -= item.Price;
    },
    clearItem: (state, action) => {
      const item = action.payload;
      const existingItem = state.cartItems.find(
        (cartItem) => cartItem.ID === item.ID
      );
      state.cartCount -= existingItem.quantity;
      state.cartTotal -= existingItem.Price * existingItem.quantity;
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.ID !== item.ID
      );
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.cartCount = 0;
      state.cartTotal = 0;
    },
    cartValueUpdate: (state) => {
      state.cartCount = state.cartItems.reduce(
        (acc, item) => acc + item.quantity,
        0
      );
      state.cartTotal = state.cartItems.reduce(
        (acc, item) => acc + item.Price * item.quantity,
        0
      );
    },
  },
});

export const { toggleCartVisible } = cartSlice.actions;
export const { addItem, removeItem, clearItem, clearCart, cartValueUpdate } =
  cartSlice.actions;

export default cartSlice.reducer;
