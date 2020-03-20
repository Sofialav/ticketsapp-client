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
        {props.children}
      </main>
    );
  };

  render() {
    if (
      !Object.keys(this.props.ticket).length ||
      !Object.keys(this.props.event).length ||
      !Object.keys(this.props.author).length
    ) {
      return <div>Loading...</div>;
    }

    if (this.props.event && this.props.author) {
      const fraud = this.props.fraud;
      return (
        <this.ticketForm>
          <div>FRAUD RATING: {fraud()}</div>
        </this.ticketForm>
      );
    }
    return <this.ticketForm />;
  }
}

export default TicketDetails;
