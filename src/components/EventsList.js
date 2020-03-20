import React, { Component } from "react";
import { Link } from "react-router-dom";
import moment from "moment";

class EventsList extends Component {
  render() {
    if (!Object.keys(this.props.events).length) {
      return <div>Loading...</div>;
    }
    const displayEvents = this.props.events.events.map(event => {
      return (
        <div key={event.id}>
          <h4>{event.name}</h4>
          <Link to={`/events/${event.id}`}>
            <img
              src={event.logo}
              srcSet={require("../images/event_logo.jpg")}
              alt="event logo"
            />
          </Link>
          <div>{moment(event.start_date).format("MMMM Do YYYY, h:mm a")}</div>
        </div>
      );
    });
    const nextPage = Number(this.props.pageId) + 1;
    return (
      <div>
        <main>{displayEvents}</main>
        <div>Total: {this.props.events.total}</div>
        <Link to={`/eventsByPage/${nextPage}`}>
          <button>Next page</button>
        </Link>
      </div>
    );
  }
}

export default EventsList;
