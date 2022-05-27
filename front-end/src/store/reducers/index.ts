import { combineReducers } from "redux";
import global from "./global";
import home from "./home";

const reducers = combineReducers({
  global,
  home
});
export default reducers;
