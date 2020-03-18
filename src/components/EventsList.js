import React, { Component } from "react";
import { Link } from "react-router-dom";
import moment from "moment";

class EventsList extends Component {
  render() {
    if (!this.props.events) {
      return <div>Loading...</div>;
    }
    const displayEvents = this.props.events.events.map(event => {
      return (
        <div key={event.id}>
          <h4>{event.name}</h4>
          <Link to={`/events/${event.id}`}>
            <img src={event.logo} alt="event logo" />
          </Link>
          <div>{moment(event.start_date).format("MMMM Do YYYY, h:mm a")}</div>
        </div>
      );
    });
    return (
      <div>
        <div>{displayEvents}</div>
        <div>Total: {this.props.events.total}</div>
      </div>
    );
  }
}

export default EventsList;
