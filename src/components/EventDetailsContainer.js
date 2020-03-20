import React, { Component } from "react";
import { connect } from "react-redux";
import { loadEvent } from "../store/actions";
import EventDetails from "./EventDetails";

class EventDetailsContainer extends Component {
  componentDidMount() {
    const eventId = this.props.match.params.eventId;
    this.props.loadEvent(eventId);
  }

  render() {
    return <EventDetails event={this.props.event} jwt={this.props.user} />;
  }
}

function mapStateToProps(state) {
  return {
    event: state.event,
    user: state.user
  };
}
export default connect(mapStateToProps, { loadEvent })(EventDetailsContainer);
