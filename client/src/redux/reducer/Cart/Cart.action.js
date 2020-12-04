/*
 * Cart redux actions
 */

// Libraries

// Helper Actions
import { requestSuccess } from "../../../utils/Global.util";

// Reducer Types
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREMENT_QUANTITY,
  DECREMENT_QUANTITY,
  DELETE_PRODUCT,
  CLEAR_CART,
} from "./Cart.type";

export const addToCart = (product) => (dispatch) =>
  dispatch(requestSuccess(ADD_TO_CART, { product, quantity: 1 }));

export const removeFromCart = (product) => (dispatch) =>
  dispatch(requestSuccess(REMOVE_FROM_CART, product));

export const incrementQuantity = (product) => (dispatch) =>
  dispatch(requestSuccess(INCREMENT_QUANTITY, product));

export const decrementQuantity = (product) => (dispatch) =>
  dispatch(requestSuccess(DECREMENT_QUANTITY, product));

export const deleteProduct = (product) => (dispatch) =>
  dispatch(requestSuccess(DELETE_PRODUCT, product));

export const clearCart = () => (dispatch) =>
  dispatch(requestSuccess(CLEAR_CART, null));
