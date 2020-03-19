import React, { Component } from "react";
import moment from "moment";
import { Link } from "react-router-dom";

class EventDetails extends Component {
  ticketsCheck = () => {
    if (this.props.event.tickets && this.props.event.tickets.length) {
      const tickets = this.props.event.tickets.map(ticket => {
        return (
          <Link to={`/tickets/${ticket.id}`}>
            <div key={ticket.id}>
              <h4>€{ticket.price}</h4>
              <div>{ticket.description}</div>
              <div>Posted by: </div>
            </div>
          </Link>
        );
      });
      return tickets;
    }
    return <div>Sorry, no tickets available now</div>;
  };

  render() {
    if (!Object.keys(this.props.event).length) {
      return <div>Loading...</div>;
    }
    const event = this.props.event;
    return (
      <main>
        <div>
          <h2>{event.name}</h2>
          <img
            src={event.logo}
            srcSet="https://images.all-free-download.com/images/graphiclarge/abstract_music_background_311570.jpg"
            alt="event logo"
          />
          <div>
            Starts on: {moment(event.start_date).format("MMMM Do, h:mm a")}
          </div>
          <div>Ends on: {moment(event.end_date).format("MMMM Do, h:mm a")}</div>
          <p>{event.description}</p>
        </div>
        <h2>Tickets for this event:</h2>
        <ul>{this.ticketsCheck()}</ul>
      </main>
    );
  }
}

export default EventDetails;
