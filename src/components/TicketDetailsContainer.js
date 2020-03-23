import React, { Component } from "react";
import { connect } from "react-redux";
import TicketDetails from "./TicketDetails";
import { loadTicket, addComment } from "../store/actions";
import TicketComments from "./TicketComments";

class TicketDetailsContainer extends Component {
  state = { comment: "" };

  componentDidMount() {
    const ticketId = this.props.match.params.ticketId;
    this.props.loadTicket(ticketId);
  }
  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  onSubmit = async event => {
    await event.preventDefault();
    await this.props.addComment({
      userId: this.props.author.id,
      text: this.state.comment,
      ticketId: this.props.ticket.id
    });
    this.setState({ comment: "" });
    this.props.loadTicket(this.props.match.params.ticketId);
  };

  render() {
    return (
      <div>
        <TicketDetails ticket={this.props.ticket} />
        <br />
        <TicketComments
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          ticket={this.props.ticket}
          jwt={this.props.user}
          values={this.state}
        />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    ticket: state.ticket,
    user: state.user,
    author: state.author
  };
}
export default connect(mapStateToProps, { loadTicket, addComment })(
  TicketDetailsContainer
);
