import { combineReducers } from "redux";
import { productReducer, selecteProductReducer } from "./productReducer";

const reducers = combineReducers({
  products: productReducer,
  product: selecteProductReducer
});

export default reducers;
