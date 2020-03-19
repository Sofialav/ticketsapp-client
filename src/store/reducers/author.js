import { AUTHOR_FETCHED } from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case AUTHOR_FETCHED:
      return action.author;
    default:
      return state;
  }
}
