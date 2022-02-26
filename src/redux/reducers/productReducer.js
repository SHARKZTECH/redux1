import {
  SET_PRODUCTS,
  SELECTED_PRODUCT,
  REMOVE_SELECTED_PRODUCT
} from "../constants/productConstant";
const initialState = {
  products: []
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_PRODUCTS: {
      return {
        ...state,
        products: payload
      };
    }

    default:
      return state;
  }
};

export const selecteProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case SELECTED_PRODUCT: {
      return {
        ...state,
        ...payload
      };
    }
    case REMOVE_SELECTED_PRODUCT: {
      return {};
    }
    default:
      return state;
  }
};
