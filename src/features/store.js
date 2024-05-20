import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./auth/authSlice";
const store = configureStore({
  reducer: {
    auths: AuthReducer,
  },
});

export default store;
