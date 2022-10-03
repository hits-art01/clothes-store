import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import { goodsReducer } from "./goodsReducer";
import { productReducer } from "./productReducer";

export const rootReducer = combineReducers({
  goods: goodsReducer,
  cart: cartReducer,
  currentProduct: productReducer,
});
