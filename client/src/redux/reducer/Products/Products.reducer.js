// Redux Types
import { UPLOAD_DATA } from "./Products.type";

// Utilities
import { REHYDRATE } from "../../../utils/Global.util";

const INITIAL_STATE = {
  loading: false,
};

const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        loading: true,
      };

    case UPLOAD_DATA:
      return {
        ...state,
        loading: false,
      };

    case REHYDRATE:
      return action.payload ? action.payload.products : INITIAL_STATE;

    default:
      return {
        loading: false,
      };
  }
};

export default productsReducer;
