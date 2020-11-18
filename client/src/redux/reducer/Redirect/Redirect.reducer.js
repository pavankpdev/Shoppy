import { REDIRECT } from "./Redirect.type";

const INITIAL_STATE = {
  redirect: "",
};

const redirectReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REDIRECT:
      return {
        ...state,
        redirect: action.payload,
      };

    default:
      return {
        ...state,
        loading: false,
      };
  }
};

export default redirectReducer;
