import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addTocart: (state, action) => {
      state.push(action.payload);
    },
    removeFromCart: (state, action) => {},
    clearCart: (state, action) => {}
  }
});
export const { addTocart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
