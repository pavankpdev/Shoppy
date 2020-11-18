import { createTransform } from "redux-persist";
import storage from "redux-persist/lib/storage/session";
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
  storage,
  transforms: [StateTransform],
  whitelist: ["products"],
  blacklist: ["redirect", "error"],
};
