export default function(state = "", action) {
  switch (action.type) {
    case "ERROR_MESSAGE":
      return action.payload;

    case "REMOVE_ERROR":
      return (state = "");

    default:
      return state;
  }
}
