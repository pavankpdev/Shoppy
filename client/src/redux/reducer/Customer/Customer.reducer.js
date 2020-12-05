// Redux Types
import { AUTH_CUSTOMER } from "./Customer.types";

// Utilities
import { REHYDRATE } from "../../../utils/Global.util";

const INITIAL_STATE = {
  customerID: null,
  loading: false,
};

const customerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        loading: true,
      };

    case AUTH_CUSTOMER:
      return {
        ...state,
        loading: false,
        customerID: action.payload.customerID,
      };

    case REHYDRATE:
      return action.payload ? action.payload.customer : INITIAL_STATE;

    default:
      return {
        ...state,
        loading: false,
      };
  }
};

export default customerReducer;
