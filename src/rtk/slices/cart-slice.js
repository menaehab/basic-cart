import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addTocart: (state, action) => {
      const existingProduct = state.find(
        (product) => product.id === action.payload.id
      );
      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      return state.filter((proudct) => proudct.id !== action.payload.id);
    },
    clearCart: (state, action) => {
      return [];
    }
  }
});
export const { addTocart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
