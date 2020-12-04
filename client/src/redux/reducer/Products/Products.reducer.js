// Redux Types
import {
  UPLOAD_DATA,
  GET_HOME_pAGE_DATA,
  GET_PRODUCT_DETAILS,
  GET_PRODUCT_WITH_CATEGORY,
} from "./Products.type";

// Utilities
import { REHYDRATE } from "../../../utils/Global.util";

const INITIAL_STATE = {
  loading: false,
  home: [],
  category: [],
  product: [],
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

    case GET_HOME_pAGE_DATA:
      return { ...state, home: action.payload, loading: false };

    case GET_PRODUCT_WITH_CATEGORY:
      return { ...state, category: action.payload, loading: false };

    case GET_PRODUCT_DETAILS:
      return { ...state, product: action.payload, loading: false };

    case REHYDRATE:
      return action.payload ? action.payload.products : INITIAL_STATE;

    default:
      return {
        ...state,
        loading: false,
      };
  }
};

export default productsReducer;
