/*
 * Redirect redux actions
 */

// Reducer Types
import { REDIRECT } from "./Redirect.type";

// Action to dispatch redirect path
export const redirectTo = (path) => {
  return {
    type: REDIRECT,
    payload: path,
  };
};
