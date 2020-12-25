// Reducer Types
import { GET_PENDING_REVIEWS, AUDIT_REVIEWS } from "./Admin.types";

const INITIAL_STATE = {
  pendingReviews: [],
  loading: false,
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
        pendingReviews: action,
      };

    case AUDIT_REVIEWS:
      return {
        ...state,
        loading: false,
        pendingReviews: action,
      };

    default:
      return {
        ...state,
        loading: false,
      };
  }
};

export default AdminReducer;
