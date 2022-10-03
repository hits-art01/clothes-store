import { DELETE_ITEM_IN_CART, SET_ITEM_IN_CART } from "../types";

const initialState = {
  items: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ITEM_IN_CART:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case DELETE_ITEM_IN_CART:
      return {
        ...state,
        items: state.items.filter((p) => p.id !== action.payload),
      };

    default:
      return state;
  }
};
