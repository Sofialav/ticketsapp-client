import React, { Component } from "react";
import { connect } from "react-redux";
import { loadEvents } from "../store/actions";
import EventsList from "./EventsList";

class EventsListContainer extends Component {
  componentDidMount() {
    const offset = (Number(this.props.match.params.pageId) - 1) * 9;
    this.props.loadEvents(offset);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.match.params.pageId !== this.props.match.params.pageId) {
      const offset = (Number(this.props.match.params.pageId) - 1) * 9;
      this.props.loadEvents(offset);
    }
  }

  render() {
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
