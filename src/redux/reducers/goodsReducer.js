import { GET_GOODS, RELOAD_GOODS } from "../types";

const initialState = {
  goods: [],
};

export const goodsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GOODS:
      const mensGoods = action.payload.filter(
        (prod) => prod.category === "men's clothing"
      );
      const womensGoods = action.payload.filter(
        (prod) => prod.category === "women's clothing"
      );

      return {
        ...state,
        goods: [...state.goods, ...mensGoods, ...womensGoods],
      };
    case RELOAD_GOODS: {
      return {
        ...state,
        goods: (state.goods = action.payload),
      };
    }
    default:
      return state;
  }
};
