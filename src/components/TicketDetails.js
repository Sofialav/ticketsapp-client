import React, { Component } from "react";
import moment from "moment";

class TicketDetails extends Component {
  ticketForm = props => {
    const ticket = this.props.ticket;
    return (
      <main>
        <h2>Ticket by {ticket.user.login}</h2>
        <h4>{ticket.event.name}</h4>
        <p>{ticket.event.description}</p>
        <div>
          Starts on: {moment(ticket.event.start_date).format("MMMM Do, h:mm a")}
        </div>
        <div>
          Ends on: {moment(ticket.event.end_date).format("MMMM Do, h:mm a")}
        </div>
        <h4>€{ticket.price}</h4>
        <div>{ticket.description}</div>
        <div>FRAUD RATING: {ticket.fraud}</div>
      </main>
    );
  };

  render() {
    if (!Object.keys(this.props.ticket).length) {
      return <div>Loading...</div>;
    }
    return <this.ticketForm />;
  }
}

export default TicketDetails;
