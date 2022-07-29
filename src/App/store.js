import cartSlice from "../Components/Features/cart/cartSlice";

const { configureStore } = require("@reduxjs/toolkit");
const {
  default: fakeDataSlice,
} = require("../Components/Features/fakeData/fakeDataSlice");

const store = configureStore({
  reducer: {
    fakeData: fakeDataSlice,
    cart: cartSlice,
  },
});
export default store;
