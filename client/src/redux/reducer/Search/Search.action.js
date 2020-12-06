/*
 * Search redux actions
 */

// Helper Actions
import { requestSuccess } from "../../../utils/Global.util";

//  Types
import { SEARCH } from "./Search.type";

export const SearchString = (search) => (dispatch) =>
  dispatch(requestSuccess(SEARCH, search));
