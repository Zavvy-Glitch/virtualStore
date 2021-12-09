import { createStore, combineReducers } from "redux";

import productReducer from "./reducers/products";
import storeReducer from "./reducers/categories";

let reducers = combineReducers({ 
  count: productReducer, 
  storeReducer:storeReducer 
});

const store = () => {
  return createStore(reducers);
};

export default store;