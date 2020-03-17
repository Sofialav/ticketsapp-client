import superagent from "superagent";
const baseUrl = "http://localhost:4000";

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
