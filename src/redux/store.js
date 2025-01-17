import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userDuck";

export default function generateStore() {
  const store = configureStore({
    reducer: {
      user: userReducer,
    },
  });
  return store;
}
