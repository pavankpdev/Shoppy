// Reducer Types
import { GET_PENDING_REVIEWS, AUDIT_REVIEWS, GET_REPORTS } from "./Admin.types";

// Utilities
import { REHYDRATE } from "../../../utils/Global.util";

const INITIAL_STATE = {
  pendingReviews: [],
  loading: false,
  reports: {},
};

const AdminReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        loading: true,
      };

    case GET_PENDING_REVIEWS:
      return {
        ...state,
        loading: false,
        pendingReviews: action.payload,
      };

    case AUDIT_REVIEWS:
      return {
        ...state,
        loading: false,
        pendingReviews: action.payload,
      };

    case GET_REPORTS:
      return {
        ...state,
        loading: false,
        reports: action.payload,
      };

    case REHYDRATE:
      return action.payload ? action.payload.Admin : INITIAL_STATE;

    default:
      return {
        ...state,
        loading: false,
      };
  }
};

export default AdminReducer;
