/*
 * Orders redux actions
 */

// Libraries
import axios from "axios";

// Helper Actions
import { requestfailed } from "../Error/error.action";
import { requestSuccess, loading } from "../../../utils/Global.util";

// Reducer Types
import { AUTH_CUSTOMER } from "./Customer.types";

// Utilities
import { keys } from "../../../utils/keys";

// Action to authenticate customer
export const authCustomer = (email, fullname) => async (dispatch) => {
  try {
    dispatch(loading());
    console.log(email);
    const authCustomerApi = await axios({
      method: "POST",
      url: `${keys.NODE_API_URL}customer/`,
      data: { email, fullname },
    });

    return dispatch(requestSuccess(AUTH_CUSTOMER, authCustomerApi.data));
  } catch (error) {
    return dispatch(requestfailed(error));
  }
};
