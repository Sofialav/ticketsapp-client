import React, { Component } from "react";

class UserCabinet extends Component {
  userPage = () => {
    const author = this.props.author;
    let tickets;
    if (author.tickets) {
      tickets = author.tickets.map(ticket => {
        return (
          <li key={ticket.id}>
            <div>Price: {ticket.price}</div>
            <div> Posted on: {ticket.createdAt}</div>
          </li>
        );
      });
    }
    return (
      <main>
        <h2>Hi {author.login}!</h2>
        <p>Here you can see all your posted tickets:</p>
        <ul>{tickets}</ul>
      </main>
    );
  };
  render() {
    if (!this.props.jwt) {
      return <div>Please login to view your personal page</div>;
    }
    return <this.userPage />;
  }
}

export default UserCabinet;
