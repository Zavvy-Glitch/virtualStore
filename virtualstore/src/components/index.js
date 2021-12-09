import { createStore, combineReducers } from "redux";

import productReducer from "./products";

let reducers = combineReducers({ count: productReducer });

const store = () => {
  return createStore(reducers);
};

export default store;
