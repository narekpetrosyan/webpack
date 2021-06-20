import { combineReducers } from "redux";
import counterReducer from "./Count/counterReducer";

export const rootReducer = combineReducers({
  counter: counterReducer,
});
