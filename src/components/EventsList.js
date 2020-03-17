import React, { Component } from "react";

class EventsList extends Component {
  render() {
    if (!this.props.events) {
      return <div>Loading...</div>;
    }
    const displayEvents = this.props.events.events.map(event => {
      return (
        <div key={event.id}>
          <h4>{event.name}</h4>
        </div>
      );
    });
    return <div>{displayEvents}</div>;
  }
}

export default EventsList;
