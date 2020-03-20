import React, { Component } from "react";
import { connect } from "react-redux";
import { loadEvents } from "../store/actions";
import EventsList from "./EventsList";

class EventsListContainer extends Component {
  componentDidMount() {
    this.props.loadEvents();
  }
  render() {
    console.log(this.props);
    return (
      <EventsList
        events={this.props.events}
        pageId={this.props.match.params.pageId}
      />
    );
  }
}

const mapStateToProps = state => ({
  events: state.events
});

export default connect(mapStateToProps, { loadEvents })(EventsListContainer);
