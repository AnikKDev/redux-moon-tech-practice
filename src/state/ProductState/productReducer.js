import { actionTypes } from "./actionTypes";

export const initialState = {
  // three primary states
  loading: false, // a boolean value
  products: [], // an array of objects
  error: false, //if there is an error
  cart: [], // an empty cart array to hold cart objects
};
export const productReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.FETCHING_START:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case actionTypes.FETCHING_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
        error: false,
      };
    case actionTypes.FETCHING_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case actionTypes.ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    default:
      // always return the whole state as default.
      return state;
  }
};
