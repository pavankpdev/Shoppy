// Redux Types
import { GET_REVIEW, POST_REVIEW } from "./Review.type";

// Utilities
import { REHYDRATE } from "../../../utils/Global.util";

const INITIAL_STATE = {
  review: [],
  loading: false,
};

const reviewReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        loading: true,
      };

    case GET_REVIEW:
      return {
        ...state,
        loading: false,
        review: action.payload,
      };

    case POST_REVIEW:
      return {
        ...state,
        loading: false,
        review: action.payload.getReviews,
      };

    case REHYDRATE:
      return action.payload ? action.payload.review : INITIAL_STATE;

    default:
      return {
        ...state,
        loading: false,
      };
  }
};

export default reviewReducer;
