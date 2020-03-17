import React, { Component } from "react";
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
          <img src={event.logo} alt="event logo" />
          <div>
            {moment(event.start_date).format("MMMM Do YYYY, h:mm:ss a")}
          </div>
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
