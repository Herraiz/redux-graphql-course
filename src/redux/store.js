import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userDuck";
import charsReducer, { getCharactersAction } from "./charsDuck";

export default function generateStore() {
  const store = configureStore({
    reducer: {
      user: userReducer,
      chars: charsReducer,
    },
  });

  // execute the action

  getCharactersAction()(store.dispatch, store.getState);
  return store;
}
