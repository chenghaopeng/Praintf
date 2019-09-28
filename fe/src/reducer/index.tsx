import { combineReducers } from "redux";
import SessionReducer from "./SessionReducer";

const rootReducer = combineReducers(
  SessionReducer,
);

export default rootReducer;