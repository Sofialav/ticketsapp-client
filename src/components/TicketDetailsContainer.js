import React, { Component } from "react";
import { connect } from "react-redux";
import TicketDetails from "./TicketDetails";
import { loadTicket, loadEvent, loadAuthor } from "../store/actions";
import moment from "moment";
import TicketComments from "./TicketComments";

class TicketDetailsContainer extends Component {
  async componentDidMount() {
    const ticketId = this.props.match.params.ticketId;
    await this.props.loadTicket(ticketId);
    const eventId = this.props.ticket.event.id;
    await this.props.loadEvent(eventId);
    this.props.loadAuthor(this.props.ticket.user.id);
  }
  fraudCalc = () => {
    let x = 0;
    // price deduction
    const allTickets = this.props.event.tickets.map(ticket => ticket.price);
    const avgPrice =
      allTickets.reduce((acc, current) => {
        return acc + current;
      }) / this.props.event.tickets.length;
    const ticketPrice = this.props.ticket.price;
    const priceDeduction = (ticketPrice / avgPrice - 1) * 100;
    if (priceDeduction < 0) {
      x += Math.abs(priceDeduction);
    } else if (priceDeduction > 0 && priceDeduction <= 10) {
      x -= priceDeduction;
    } else x -= 10;
    // time deduction
    let creationTime = parseInt(
      moment(this.props.ticket.createdAt).format("H")
    );
    if (creationTime >= 9 && creationTime < 17) {
      x -= 10;
    } else x += 10;
    // ticket numbers deduction
    let userTickets = this.props.author.tickets;
    if (userTickets.length === 1) {
      x += 10;
    }
    // comments deduction
    let comments = this.props.ticket.comments.length;
    if (comments > 3) {
      x += 5;
    }
    //range 5%-95%
    if (x < 5) {
      x = 5;
    } else if (x > 95) {
      x = 95;
    }
    return x;
  };

  render() {
    // console.log(this.fraudCalc());
    return (
      <div>
        <TicketDetails
          ticket={this.props.ticket}
          event={this.props.event}
          author={this.props.author}
          fraud={this.fraudCalc}
        />
        <br />
        <TicketComments ticket={this.props.ticket} />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    ticket: state.ticket,
    event: state.event,
    author: state.author
  };
}
export default connect(mapStateToProps, { loadTicket, loadEvent, loadAuthor })(
  TicketDetailsContainer
);
