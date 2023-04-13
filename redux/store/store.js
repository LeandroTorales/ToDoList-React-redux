import { configureStore } from "@reduxjs/toolkit";
import reducers from "./combineReducers";

const store = configureStore({
  reducer: reducers,
});

export default store;
