import { combineReducers } from "redux";
import SessionReducer from "./SessionReducer";
import PostReducer from "./PostReducer";

const rootReducer = combineReducers({
  SessionReducer: SessionReducer,
  PostReducer: PostReducer
});

export default rootReducer;