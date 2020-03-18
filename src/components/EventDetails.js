import React, { Component } from "react";
import moment from "moment";

class EventDetails extends Component {
  ticketsCheck = () => {
    if (this.props.event.tickets && this.props.event.tickets.length) {
      const tickets = this.props.event.tickets.map(ticket => {
        return (
          <div key={ticket.id}>
            <h4>€{ticket.price}</h4>
            <div>{ticket.description}</div>
          </div>
        );
      });
      return tickets;
    }
    return <div>Sorry, no tickets available now</div>;
  };
  render() {
    if (!this.props.event) {
      return <div>Loading...</div>;
    }
    const event = this.props.event;

    return (
      <main>
        <div>
          <h2>{event.name}</h2>
          <img src={event.logo} alt="event logo" />
          <div>
            Starts on: {moment(event.start_date).format("MMMM Do, h:mm a")}
          </div>
          <div>Till: {moment(event.end_date).format("MMMM Do, h:mm a")}</div>
          <p>{event.description}</p>
        </div>
        <div>
          <h2>Tickets for this event:</h2>
          {this.ticketsCheck()}
        </div>
      </main>
    );
  }
}

export default EventDetails;
