import React, { Component } from "react";
import { connect } from "react-redux";
import LoginForm from "./AuthForm";
import { login } from "../store/actions";

class LoginFormContainer extends Component {
  state = { login: "", password: "" };

  onSubmit = event => {
    event.preventDefault();
    this.props.login(this.state, this.props.history);
    this.setState({ name: "", password: "" });
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div>
        <h3>Please login to sell/buy tickets:</h3>
        <LoginForm
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          values={this.state}
          buttonName="Login"
        />
      </div>
    );
  }
}

export default connect(null, { login })(LoginFormContainer);
