// Redux Types
import { GET_ALL_ORDERS, NEW_ORDER, GET_TRACKING_DATA } from "./Orders.type";

// Utilities
import { REHYDRATE } from "../../../utils/Global.util";

const INITIAL_STATE = {
  loading: false,
  allOrders: [],
  tracking: {},
};

const orderReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        loading: true,
      };

    case GET_ALL_ORDERS:
      return {
        ...state,
        loading: false,
        allOrders: action.payload,
      };

    case NEW_ORDER:
      return {
        ...state,
        loading: false,
      };
      
    case GET_TRACKING_DATA:
      return {
        ...state,
        loading: false,
        tracking: action.payload,
      };

    case REHYDRATE:
      return action.payload ? action.payload.order : INITIAL_STATE;

    default:
      return {
        ...state,
        loading: false,
      };
  }
};

export default orderReducer;
