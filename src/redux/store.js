import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slise";

export const store = configureStore({
  reducer: {
    user: userSlice,
  },
});
