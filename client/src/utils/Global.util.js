/*
 * Global utilities, contains helper function used among all parts of the project
 */

// Libraries
import axios from "axios";
import moment from "moment";
import filter from "lodash/filter";

// Configs
// import { clientEncryptor } from "../config/Global.config";

// utility function to set header to axios
export const setAxiosHeader = (headerType, data) => {
  if (data) {
    // apply this header to every request is signed in
    axios.defaults.headers.common[headerType] = data;
  } else {
    // if not signed in delete this header
    delete axios.defaults.headers.common[headerType];
  }
};

// utility function to dispatch loading actin to redux
export const loading = () => {
  return {
    type: "LOADING",
  };
};

// utility function to dispatch data redux, when request was successfull
export const requestSuccess = (type, payload) => {
  return {
    type,
    payload,
  };
};

// utility constant for react-persist action type
export const REHYDRATE = "persist/REHYDRATE";
