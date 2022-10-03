import { SET_CURRENT_PRODUCT } from "../types";

const initialState = {
  currentProduct: null,
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_PRODUCT:
      return {
        ...state,
        currentProduct: (state.currentProduct = action.payload),
      };

    default:
      return state;
  }
};
