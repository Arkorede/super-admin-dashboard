import { combineReducers } from "redux";
import { authReducer, roleReducer, partner1Reducer, partner2Reducer, partner3Reducer } from "./reducers";

const rootReducer = combineReducers({
  authReducer,
  roleReducer,
  partner1Reducer,
  partner2Reducer,
  partner3Reducer
});

export default rootReducer;