import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface CartItem {
  id: number;
  name: string;
  quantity: number;
  image_url: string;
}

interface CartState {
  cartItems: CartItem[];
}

const initialState: CartState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      if (existingItem) {
        if (existingItem.quantity === 1) {
          state.cartItems = state.cartItems.filter(
            (item) => item.id !== action.payload
          );
        } else {
          existingItem.quantity -= 1;
        }
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCart = (state: RootState) => state.cart.cartItems;

export default cartSlice.reducer;
