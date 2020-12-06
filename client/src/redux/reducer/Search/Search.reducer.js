import { SEARCH } from "./Search.type";

// Utilities
import { REHYDRATE } from "../../../utils/Global.util";

const INITIAL_STATE = {
  search: "",
};

const searchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH:
      return {
        ...state,
        search: action.payload,
      };

    case REHYDRATE:
      return action.payload ? action.payload.search : INITIAL_STATE;

    default:
      return {
        ...state,
      };
  }
};

export default searchReducer;
