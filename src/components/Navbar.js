import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Navbar extends Component {
  loginCheck = () => {
    if (!this.props.user) {
      const login = (
        <Link to={"/login"}>
          <div>Login</div>
        </Link>
      );
      return login;
    } else {
      const login = (
        <Link to={"/usertickets"}>
          <div>My tickets</div>
        </Link>
      );
      return login;
    }
  };
  render() {
    return (
      <nav>
        <Link to={"/eventsByPage/1"}>
          <div>Home</div>
        </Link>
        {this.loginCheck()}
      </nav>
    );
  }
}
function mapStateToProps(state) {
  return {
    user: state.user
  };
}
export default connect(mapStateToProps)(Navbar);
