import {
  SET_PRODUCTS,
  SELECTED_PRODUCT,
  REMOVE_SELECTED_PRODUCT
} from "../constants/productConstant";

export const setProdects = (products) => {
  return {
    type: SET_PRODUCTS,
    payload: products
  };
};

export const selectedProduct = (product) => {
  return {
    type: SELECTED_PRODUCT,
    payload: product
  };
};

export const removeselectedProduct = () => {
  return {
    type: REMOVE_SELECTED_PRODUCT
  };
};
