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
export const loadEvents = offsetValue => async (dispatch, getState) => {
  try {
    const response = await superagent
      .get(`${baseUrl}/events`)
      .query({ offset: offsetValue });
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
      return history.push("/myPage");
    } catch (error) {
      if (error.response) {
        await dispatch(removeError());
        const errorMessage = displayError(error.response.body.message);
        return dispatch(errorMessage);
      }
      console.error(error);
    }
  };
}
// signup
const addUser = () => {
  return {
    type: "ADD_USER"
  };
};
export function signup(data) {
  return async function(dispatch) {
    try {
      await superagent.post(`${baseUrl}/users`).send(data);
      const action = addUser();
      await dispatch(action);
      dispatch(removeError());
    } catch (error) {
      await dispatch(removeError());
      if (error.response && error.response.body.message) {
        const errorMessage = displayError(error.response.body.message);
        return dispatch(errorMessage);
      } else if (error.response && error.response.body) {
        const validationError = displayError(error.response.body);
        return dispatch(validationError);
      }
      console.error(error);
    }
  };
}
// show single event info
export const EVENT_DETAILS = "EVENT_DETAILS";
const eventFetched = event => ({
  type: EVENT_DETAILS,
  event
});
export const loadEvent = id => async dispatch => {
  try {
    const response = await superagent.get(`${baseUrl}/events/${id}`);
    dispatch(eventFetched(response.body));
  } catch (error) {
    console.error(error);
  }
};
// get user by Id
export const AUTHOR_FETCHED = "AUTHOR_FETCHED";
const authorFetched = author => ({
  type: AUTHOR_FETCHED,
  author
});
export const loadAuthor = id => async dispatch => {
  try {
    const author = await superagent.get(`${baseUrl}/users/${id}`);
    dispatch(authorFetched(author.body));
  } catch (error) {
    console.error(error);
  }
};
// get ticket by Id
export const TICKET_DETAILS = "TICKET_DETAILS";
const ticketFetched = ticket => ({
  type: TICKET_DETAILS,
  ticket
});
export const loadTicket = id => async dispatch => {
  try {
    const ticket = await superagent.get(`${baseUrl}/tickets/${id}`);
    dispatch(ticketFetched(ticket.body));
  } catch (error) {
    console.error(error);
  }
};
