import React, { Component } from "react";

class TicketComments extends Component {
  postComment = () => {
    if (this.props.jwt) {
      return (
        <form onSubmit={this.props.onSubmit}>
          <textarea
            placeholder="comment"
            type="text"
            value={this.props.values.comment}
            onChange={this.props.onChange}
            name="comment"
          ></textarea>
          <br />
          <button type="submit">Add comment</button>
        </form>
      );
    }
    return null;
  };

  render() {
    if (!Object.keys(this.props.ticket).length) {
      return <div>Loading...</div>;
    }
    const comments = this.props.ticket.comments.map(comment => {
      return (
        <div key={comment.id}>
          <h4>Posted by: {comment.user.login}</h4>
          <p>{comment.text}</p>
        </div>
      );
    });
    return (
      <section>
        <h3>User comments:</h3>
        <this.postComment />
        {comments}
      </section>
    );
  }
}

export default TicketComments;
