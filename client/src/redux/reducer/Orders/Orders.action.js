/*
 * Orders redux actions
 */

// Libraries
import axios from "axios";

// Helper Actions
import { requestfailed } from "../Error/error.action";
import { requestSuccess, loading } from "../../../utils/Global.util";

// Reducer Types
import { GET_ALL_ORDERS, NEW_ORDER } from "./Orders.type";

// Utilities
import { keys } from "../../../utils/keys";

// Action to get all the order history of the customer
export const getAllOrders = (customerId) => async (dispatch) => {
  try {
    dispatch(loading());

    const getAllOrdersApi = await axios({
      method: "GET",
      url: `${keys.NODE_API_URL}orders/${customerId}`,
    });

    return dispatch(requestSuccess(GET_ALL_ORDERS, getAllOrdersApi.data));
  } catch (error) {
    return dispatch(requestfailed(error));
  }
};

// Action to place new order
export const placeNewOrder = (customerId, purchaseData, address) => async (
  dispatch
) => {
  try {
    dispatch(loading());

    const placeNewOrderApi = await axios({
      method: "POST",
      url: `${keys.NODE_API_URL}orders/new/${customerId}`,
      data: { purchaseData, address },
    });

    return dispatch(requestSuccess(NEW_ORDER, placeNewOrderApi.data));
  } catch (error) {
    return dispatch(requestfailed(error));
  }
};
