import React, { Component } from "react";
import { connect } from "react-redux";
import TicketDetails from "./TicketDetails";
import { loadTicket } from "../store/actions";
import TicketComments from "./TicketComments";

class TicketDetailsContainer extends Component {
  componentDidMount() {
    const ticketId = this.props.match.params.ticketId;
    this.props.loadTicket(ticketId);
  }

  render() {
    return (
      <div>
        <TicketDetails ticket={this.props.ticket} />
        <br />
        <TicketComments ticket={this.props.ticket} />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    ticket: state.ticket
  };
}
export default connect(mapStateToProps, { loadTicket })(TicketDetailsContainer);
