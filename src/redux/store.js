import { combineReducers, compose, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import userReducer from "./userDuck";

let rootReducer = combineReducers({
  user: userReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
  let store = configureStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
}
