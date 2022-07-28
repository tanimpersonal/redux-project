const { configureStore } = require("@reduxjs/toolkit");
const {
  default: fakeDataSlice,
} = require("../Components/Features/fakeData/fakeDataSlice");

const store = configureStore({
  reducer: {
    fakeData: fakeDataSlice,
  },
});
export default store;
