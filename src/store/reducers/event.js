import { EVENT_DETAILS } from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case EVENT_DETAILS:
      return action.event;
    default:
      return state;
  }
}
