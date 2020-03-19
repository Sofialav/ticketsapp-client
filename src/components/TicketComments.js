import React, { Component } from "react";

class TicketComments extends Component {
  render() {
    if (!Object.keys(this.props.ticket).length) {
      return <div>Loading...</div>;
    }
    const comments = this.props.ticket.comments.map(comment => {
      return (
        <div key={comment.id}>
          <h4>Posted by:</h4>
          <p>{comment.text}</p>
        </div>
      );
    });
    return (
      <section>
        <h3>User comments:</h3>
        {comments}
      </section>
    );
  }
}

export default TicketComments;
