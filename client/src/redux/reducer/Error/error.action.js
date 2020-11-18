/*
 * Error redux actions
 */

// Reducer Types
import { GET_ERROR } from "./error.type";

// Action to dispatch error messages to redux store
export const requestfailed = (error) => {
  return {
    type: GET_ERROR,
    payload: `${
      error.response
        ? error.response.data.error
        : "Internal server error, Please try again!"
    }`,
  };
};
