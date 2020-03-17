import superagent from "superagent";
const baseUrl = "http://localhost:4000";

//add  error:
export const displayError = payload => {
  return {
    type: "ERROR_MESSAGE",
    payload
  };
};
// remove error:
export const removeError = () => {
  return {
    type: "REMOVE_ERROR"
  };
};

// loading events
export const EVENTS_FETCHED = "EVENTS_FETCHED";
const eventsFetched = events => ({
  type: EVENTS_FETCHED,
  events
});
export const loadEvents = () => async (dispatch, getState) => {
  // when the state already contains events, we don't fetch them again
  if (getState().events) return;
  try {
    const response = await superagent.get(`${baseUrl}/events`);
    console.log(response.body);
    const action = eventsFetched(response.body);
    dispatch(action);
  } catch (error) {
    console.error(error);
  }
};
// login
export const JWT = "JWT";
const loginUser = payload => ({
  type: JWT,
  payload
});
export function login(data, history) {
  return async function(dispatch) {
    try {
      const response = await superagent.post(`${baseUrl}/login`).send(data);
      const action = loginUser(response.body.jwt);
      await dispatch(action);
      await dispatch(removeError());
      return history.push("/userpage");
    } catch (error) {
      if (error.response) {
        const errorMessage = displayError(error.response.body.message);
        return dispatch(errorMessage);
      }
      console.error(error);
    }
  };
}
