import React, { Component } from "react";
import { connect } from "react-redux";
import TicketDetails from "./TicketDetails";
import { loadTicket } from "../store/actions";

class TicketDetailsContainer extends Component {
  componentDidMount() {
    const ticketId = this.props.match.params.ticketId;
    this.props.loadTicket(ticketId);
  }
  render() {
    return <TicketDetails ticket={this.props.ticket} />;
  }
}
function mapStateToProps(state) {
  return {
    ticket: state.ticket
  };
}
export default connect(mapStateToProps, { loadTicket })(TicketDetailsContainer);
