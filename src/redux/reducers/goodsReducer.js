import { GET_GOODS } from "../types";

const initialState = {
  goods: [],
};

export const goodsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GOODS:
      return {
        ...state,
        goods: [...state.goods, ...action.payload],
      };

    default:
      return state;
  }
};
