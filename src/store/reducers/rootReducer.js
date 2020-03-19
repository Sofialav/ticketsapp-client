import { combineReducers } from "redux";
import user from "./user";
import events from "./events";
import errors from "./errors";
import event from "./event";
import ticket from "./ticket";
import author from "./author";

export default combineReducers({
  user,
  events,
  errors,
  event,
  ticket,
  author
});
