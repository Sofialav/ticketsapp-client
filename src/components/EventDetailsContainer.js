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
    return <EventDetails event={this.props.event} />;
  }
}

function mapStateToProps(state) {
  return {
    event: state.event
  };
}
export default connect(mapStateToProps, { loadEvent })(EventDetailsContainer);
