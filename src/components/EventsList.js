import React, { Component } from "react";
import { Link } from "react-router-dom";
import moment from "moment";

class EventsList extends Component {
  nextButton = () => {
    const nextPage = Number(this.props.pageId) + 1;
    const offset = Number(this.props.pageId) * 9;
    if (this.props.events.total > offset) {
      return (
        <div>
          <Link to={`/eventsByPage/${nextPage}`}>
            <button>Next page</button>
          </Link>
        </div>
      );
    }
    return null;
  };
  prevButton = () => {
    const prevPage = Number(this.props.pageId) - 1;
    if (Number(this.props.pageId) > 1) {
      return (
        <div>
          <Link to={`/eventsByPage/${prevPage}`}>
            <button>Previous page</button>
          </Link>
        </div>
      );
    }
    return null;
  };

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
    return (
      <div>
        <main>{displayEvents}</main>
        <div>Total events: {this.props.events.total}</div>
        <div>
          <this.nextButton />
          <this.prevButton />
        </div>
      </div>
    );
  }
}

export default EventsList;
