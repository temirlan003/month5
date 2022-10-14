import { configureStore } from "@reduxjs/toolkit";
import reducer from "../redux/slice";
import loaderSlice from "./loaderSlice";

export const store = configureStore({
  reducer: {
    coreReducer: reducer,
    load: loaderSlice,
  },
});
