import { TICKET_DETAILS } from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case TICKET_DETAILS:
      return action.ticket;
    default:
      return state;
  }
}
