import React, { Component } from "react";

class TicketDetails extends Component {
  render() {
    if (!Object.keys(this.props.ticket).length) {
      return <div>Loading...</div>;
    }
    const ticket = this.props.ticket;
    console.log(ticket);
    return (
      <main>
        <h2>Ticket information</h2>
        <h4>{ticket.event.name}</h4>
        <p>{ticket.event.description}</p>
        <div>Starts on: {ticket.event.start_date}</div>
        <div>Ends on: {ticket.event.end_date}</div>
        <h4>€{ticket.price}</h4>
        <div>{ticket.description}</div>
        <div>FRAUD RISK PLACEHOLDER</div>
        <div>Posted by: {ticket.user.login}</div>
      </main>
    );
  }
}

export default TicketDetails;
