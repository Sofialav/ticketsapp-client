import React, { Component } from "react";
import { connect } from "react-redux";
import { loadEvents } from "../store/actions";
import EventsList from "./EventsList";

class EventsListContainer extends Component {
  componentDidMount() {
    this.props.loadEvents();
  }

  render() {
    return <EventsList events={this.props.events} />;
  }
}

const mapStateToProps = state => ({
  events: state.events
});

export default connect(mapStateToProps, { loadEvents })(EventsListContainer);
