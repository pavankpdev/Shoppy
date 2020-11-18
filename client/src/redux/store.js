/* 
Utilizing redux library for state management
 Redux documentation: https://redux.js.org/introduction/getting-started
 react-redux documentation: https://react-redux.js.org/introduction/quick-start
 redux-logger documentation: https://www.npmjs.com/package/redux-logger
 Redux Persist documentation: https://www.npmjs.com/package/redux-persist#basic-usage
*/

// Libraries
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";

// Persisted Root Reducer
import { persistedState } from "./reducer/rootReducer";

// redux middlewares
const middlewares = [thunk];

// setup redux-logger only in development environment
if (process.env.NODE_ENV === "development") {
  const { logger } = require("redux-logger");

  middlewares.push(logger);
}

// exporting redux store react-redux
export const store = createStore(
  persistedState,
  {},
  applyMiddleware(...middlewares)
);

// exporting persisted store to redux-persit
export const persistor = persistStore(store);
