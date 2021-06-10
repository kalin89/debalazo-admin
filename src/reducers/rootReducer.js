import { combineReducers } from "redux";

import { uiReducer } from "./uiReducer";
import { requestReducer } from "./requestReducer";
import { userReducer } from "./userReducer";
import { businessReducer } from "./businessReducer";

export const rootReducer = combineReducers({
  ui: uiReducer,
  request: requestReducer,
  user: userReducer,
  business: businessReducer
});
