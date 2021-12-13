import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'

import productReducer from "./reducers/products";
import storeReducer from "./reducers/categories";
import cartReducer from "./reducers/cart"

let reducers = combineReducers({ 
  count: productReducer, 
  storeReducer:storeReducer,
  cart: cartReducer,
});

const store = () => {
  return createStore(reducers, composeWithDevTools);
};

export default store;