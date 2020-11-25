// Reducer Types
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREMENT_QUANTITY,
  DECREMENT_QUANTITY,
  DELETE_PRODUCT,
} from "./Cart.type";

// Utilities
import { REHYDRATE } from "../../../utils/Global.util";

const INITIAL_STATE = {
  cart: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [
          ...state.cart,
          { ...action.payload.product, quantity: action.payload.quantity },
        ],
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(
          ({ Product_ID }) => action.payload.Product_ID !== Product_ID
        ),
      };

    case INCREMENT_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((e) => {
          if (action.payload === e.Product_ID) {
            return {
              ...e,
              quantity: e.quantity + 1,
            };
          }
          return e;
        }),
      };

    case DECREMENT_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((e) => {
          if (action.payload === e.Product_ID) {
            return {
              ...e,
              quantity: e.quantity > 1 ? e.quantity - 1 : e.quantity,
            };
          }
          return e;
        }),
      };
    
    case DELETE_PRODUCT:
      return {
        ...state,
        cart: state.cart.filter(
          ({ Product_ID }) => action.payload !== Product_ID
        ),
      };

    case REHYDRATE:
      return action.payload ? action.payload.cart : INITIAL_STATE;

    default:
      return {
        ...state,
      };
  }
};

export default cartReducer;
