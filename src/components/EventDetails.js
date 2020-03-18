import React, { Component } from "react";
import moment from "moment";

class EventDetails extends Component {
  render() {
    if (!this.props.event) {
      return <div>Loading...</div>;
    }
    const event = this.props.event;
    return (
      <div>
        <h2>{event.name}</h2>
        <img src={event.logo} alt="event logo" />
        <div>
          Starts on: {moment(event.start_date).format("MMMM Do, h:mm a")}
        </div>
        <div>Till: {moment(event.end_date).format("MMMM Do, h:mm a")}</div>
        <p>{event.description}</p>
      </div>
    );
  }
}

export default EventDetails;
