/*
 * Review redux actions
 */

// Libraries
import axios from "axios";

// Helper Actions
import { requestfailed } from "../Error/error.action";
import { requestSuccess, loading } from "../../../utils/Global.util";

// Reducer Types
import { GET_REVIEW, POST_REVIEW } from "./Review.type";

// Utilities
import { keys } from "../../../utils/keys";

// Action to get all reviews associated with the given product id
export const getReviews = (productId) => async (dispatch) => {
  try {
    dispatch(loading());
    const getReviewsApi = await axios({
      method: "GET",
      url: `${keys.NODE_API_URL}review/${productId}`,
    });

    return dispatch(requestSuccess(GET_REVIEW, getReviewsApi.data));
  } catch (error) {
    return dispatch(requestfailed(error));
  }
};

// Action to post new review
export const postReview = (
  productId,
  customerID,
  rating,
  review,
  subject
) => async (dispatch) => {
  try {
    dispatch(loading());
    const postReviewApi = await axios({
      method: "POST",
      url: `${keys.NODE_API_URL}review/new/${productId}/${customerID}`,
      data: { reviewData: { rating, review, subject } },
    });

    return dispatch(requestSuccess(POST_REVIEW, postReviewApi.data));
  } catch (error) {
    return dispatch(requestfailed(error));
  }
};
