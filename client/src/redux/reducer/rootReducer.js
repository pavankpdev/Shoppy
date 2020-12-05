// libraries
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

// configs
import { persistConfig } from "../../config/reduxPersist.config";

// Reducers
import productsReducer from "./Products/Products.reducer";
import redirectReducer from "./Redirect/Redirect.reducer";
import cartReducer from "./Cart/Cart.reducer";
import orderReducer from "./Orders/Orders.reducer";
import customerReducer from "./Customer/Customer.reducer";
import errorReducer from "./Error/error.reducer";

// root reducer
const rootReducer = combineReducers({
  products: productsReducer,
  redirect: redirectReducer,
  cart: cartReducer,
  order: orderReducer,
  customer: customerReducer,
  error: errorReducer,
});

// warpping up the root reducer with redux-persist to store state in session storage
export const persistedState = persistReducer(persistConfig, rootReducer);
