/*
 * Products redux actions
 */

// Libraries
import axios from "axios";

// Helper Actions
import { requestfailed } from "../Error/error.action";
import { requestSuccess, loading } from "../../../utils/Global.util";

// Reducer Types
import {
  UPLOAD_DATA,
  GET_HOME_pAGE_DATA,
  GET_PRODUCT_WITH_CATEGORY,
  GET_PRODUCT_DETAILS,
  GET_LIST,
  REMOVE_FROM_LIST,
  ADD_TO_LIST,
} from "./Products.type";

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

// Action to get home page product data from server
export const getHomePageData = () => async (dispatch) => {
  try {
    dispatch(loading());

    const getHomePageDataApi = await axios({
      method: "GET",
      url: `${keys.NODE_API_URL}`,
    });

    return dispatch(
      requestSuccess(GET_HOME_pAGE_DATA, getHomePageDataApi.data)
    );
  } catch (error) {
    requestfailed(error);
  }
};

// Action to get products data based on category
export const getProductsWithCategory = (category) => async (dispatch) => {
  try {
    dispatch(loading());
    const getProductsWithCategoryApi = await axios({
      method: "GET",
      url: `${keys.NODE_API_URL}products/c/${category}`,
    });

    return dispatch(
      requestSuccess(GET_PRODUCT_WITH_CATEGORY, getProductsWithCategoryApi.data)
    );
  } catch (error) {
    requestfailed(error);
  }
};

// Actions to get specific product data
export const getSpecificProductData = (productId) => async (dispatch) => {
  try {
    dispatch(loading());

    const getSpecificProductDataApi = await axios({
      method: "GET",
      url: `${keys.NODE_API_URL}products/p/${productId}`,
    });

    return dispatch(
      requestSuccess(GET_PRODUCT_DETAILS, getSpecificProductDataApi.data)
    );
  } catch (error) {
    return dispatch(requestfailed(error));
  }
};

// Actions to get all the list
export const getAllList = (customer) => async (dispatch) => {
  try {
    dispatch(loading());

    const getList = await axios({
      method: "GET",
      url: `${keys.NODE_API_URL}products/saved/${customer}`,
    });

    return dispatch(requestSuccess(GET_LIST, getList.data.list));
  } catch (error) {
    return dispatch(requestfailed(error));
  }
};

// Action to add item to list
export const addList = (listData) => async (dispatch) => {
  try {
    dispatch(loading());

    const addListd = await axios({
      method: "POST",
      url: `${keys.NODE_API_URL}products/saved/add`,
      data: { listData },
    });

    return dispatch(requestSuccess(ADD_TO_LIST, addListd.data.list));
  } catch (error) {
    return dispatch(requestfailed(error));
  }
};

// Action to delete item from list
export const deleteList = (listData) => async (dispatch) => {
  try {
    dispatch(loading());

    const DeteleList = await axios({
      method: "POST",
      url: `${keys.NODE_API_URL}products/saved/delete`,
      data: { listData },
    });

    return dispatch(requestSuccess(REMOVE_FROM_LIST, DeteleList.data.list));
  } catch (error) {
    return dispatch(requestfailed(error));
  }
};
