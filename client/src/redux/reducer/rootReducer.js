// libraries
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

// configs
import { persistConfig } from "../../config/reduxPersist.config";

// Reducers
import products from "./Products/Products.reducer";
import redirect from "./Redirect/Redirect.reducer";
import cart from "./Cart/Cart.reducer";
import order from "./Orders/Orders.reducer";
import customer from "./Customer/Customer.reducer";
import search from "./Search/Search.reducer";
import review from "./Review/Review.reducer";
import Admin from "./Admin/Admin.reducer";
import error from "./Error/error.reducer";

// root reducer
const rootReducer = combineReducers({
  products,
  redirect,
  cart,
  order,
  customer,
  search,
  review,
  Admin,
  error,
});

// warpping up the root reducer with redux-persist to store state in session storage
export const persistedState = persistReducer(persistConfig, rootReducer);
