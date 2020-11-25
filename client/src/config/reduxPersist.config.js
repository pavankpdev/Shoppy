import { createTransform } from "redux-persist";
import sessionStorage from "redux-persist/lib/storage/session";
import localStorage from "redux-persist/lib/storage";
import { stringify, parse } from "flatted";

const StateTransform = createTransform(
  (inboundState, key) => {
    return stringify(inboundState);
  },
  (outboundState, key) => {
    return parse(outboundState);
  }
);

export const persistConfig = {
  key: "redux",
  storage:
    process.env.NODE_ENV === "development" ? sessionStorage : localStorage,
  transforms: [StateTransform],
  whitelist: ["products", "cart"],
  blacklist: ["redirect", "error"],
};
