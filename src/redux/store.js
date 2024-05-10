import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
console.log("OnCreateStore : ", store.getState());

store.subscribe(() => {
  console.log("StoreChange : ", store.getState());
});

export default store;
