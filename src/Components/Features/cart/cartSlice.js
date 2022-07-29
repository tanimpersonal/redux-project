import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: { cartIcon: 0, cartItem: 0 },

  reducers: {
    addCart: (state) => {
      state.cartIcon = state.cartIcon + 1;
    },
  },
});
export const { addCart } = cartSlice.actions;
export default cartSlice.reducer;
