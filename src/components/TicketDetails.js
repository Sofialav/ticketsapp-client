import React, { Component } from "react";

class TicketDetails extends Component {
  render() {
    if (!this.props.ticket) {
      return <div>Loading...</div>;
    }
    const ticket = this.props.ticket;
    console.log(ticket);
    return (
      <main>
        <h2>Ticket information</h2>
        {/* <h4>{ticket.event.name}</h4> */}
        <div>{ticket.id}</div>
      </main>
    );
  }
}

export default TicketDetails;
