/*
 * Products redux actions
 */

// Libraries
import axios from "axios";

// Helper Actions
import { requestfailed } from "../Error/error.action";
import { requestSuccess, loading } from "../../../utils/Global.util";

// Reducer Types
import { UPLOAD_DATA } from "./Products.type";

// Utilities
import { keys } from "../../../utils/keys";

// Action to upload products data to database
export const uploadProductData = (productData) => async (dispatch) => {
  try {
    dispatch(loading());

    const uploadProductDataApi = await axios({
      method: "POST",
      url: `${keys.NODE_API_URL}products/upload`,
      data: { productData },
    });

    return dispatch(requestSuccess(UPLOAD_DATA, uploadProductDataApi.data));
  } catch (error) {
    return dispatch(requestfailed(error));
  }
};
