import { combineReducers } from "redux";
import { authReducer, roleReducer, partner1Reducer, partner2Reducer } from "./reducers";

const rootReducer = combineReducers({
  authReducer,
  roleReducer,
  partner1Reducer,
  partner2Reducer
});

export default rootReducer;