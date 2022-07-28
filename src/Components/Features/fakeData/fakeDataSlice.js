import axios from "axios";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const url = "https://fakestoreapi.com/products";
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const res = await axios.get(url);
    return res.data;
  }
);
export const fakeDataSlice = createSlice({
  name: "fakeData",
  initialState: {
    isLoading: false,
    products: [],
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
      state.error = null;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.products = [];
      state.error = action.error.message;
    });
  },
});
export default fakeDataSlice.reducer;
