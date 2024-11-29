import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: 0,
  },
  reducers: {
    addToCart: (state) => {
      state.value += 1;
    },
    removeFromCart: (state) => {
      state.value -= 1;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCart = (state: RootState) => state.cart.value;

export default cartSlice.reducer;
