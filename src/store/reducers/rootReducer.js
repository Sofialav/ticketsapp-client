import { combineReducers } from "redux";
import user from "./user";
import events from "./events";
import errors from "./errors";
import event from "./event";

export default combineReducers({
  user,
  events,
  errors,
  event
});
