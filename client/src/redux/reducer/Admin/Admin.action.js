/*
 * Admin redux actions
 */

// Libraries
import axios from "axios";

// Helper Actions
import { requestfailed } from "../Error/error.action";
import { requestSuccess, loading } from "../../../utils/Global.util";

// Reducer Types
import { GET_PENDING_REVIEWS, AUDIT_REVIEWS, GET_REPORTS } from "./Admin.types";

// Utilities
import { keys } from "../../../utils/keys";

// Action to get all reviews that is'nt audited yet
export const GetPendingReview = () => async (dispatch) => {
  try {
    dispatch(loading());
    const adminReviewApi = await axios({
      method: "GET",
      url: `${keys.NODE_API_URL}admin/pending-reviews/`,
    });
    return dispatch(requestSuccess(GET_PENDING_REVIEWS, adminReviewApi.data));
  } catch (error) {
    return dispatch(requestfailed(error));
  }
};

// Action to dispatch new audit reviews
export const AuditReview = (auditList) => async (dispatch) => {
  try {
    dispatch(loading());
    const adminReviewApi = await axios({
      method: "POST",
      url: `${keys.NODE_API_URL}admin/audit-reviews/`,
      data: { auditList },
    });
    return dispatch(requestSuccess(AUDIT_REVIEWS, adminReviewApi.data));
  } catch (error) {
    return dispatch(requestfailed(error));
  }
};

// Action to get report
export const GetReports = () => async (dispatch) => {
  try {
    dispatch(loading());

    const getReportsApi = await axios({
      method: "GET",
      url: `${keys.NODE_API_URL}admin/analytics/`,
    });

    return dispatch(requestSuccess(GET_REPORTS, getReportsApi.data));
  } catch (error) {
    return dispatch(requestfailed(error));
  }
};
