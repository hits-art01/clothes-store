import {
  DELETE_ITEM_IN_CART,
  GET_GOODS,
  GET_GOODS_WATCH,
  RELOAD_GOODS,
  SET_CURRENT_PRODUCT,
  SET_ITEM_IN_CART,
} from "./types";

export const getGoods = (payload) => ({ type: GET_GOODS, payload });
export const getGoodsWatch = () => ({ type: GET_GOODS_WATCH });
export const setItemInCart = (payload) => ({ type: SET_ITEM_IN_CART, payload });
export const deleteItemInCart = (payload) => ({
  type: DELETE_ITEM_IN_CART,
  payload,
});

export const setCurrentProduct = (payload) => ({
  type: SET_CURRENT_PRODUCT,
  payload,
});
export const reloadGoods = (payload) => ({
  type: RELOAD_GOODS,
  payload,
});
