import { GET_GOODS, GET_GOODS_WATCH } from "./types";

export const getGoods = (payload) => ({ type: GET_GOODS, payload });
export const getGoodsWatch = () => ({ type: GET_GOODS_WATCH });
