import React, { Component } from "react";
import { connect } from "react-redux";
import { signup } from "../../store/actions";
import SignupForm from "./AuthForm";

class SignupFormContainer extends Component {
  state = { login: "", password: "", email: "" };

  onSubmit = event => {
    event.preventDefault();
    this.props.signup(this.state);
    this.setState({ login: "", password: "", email: "" });
  };
  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div>
        <h3>If you don`t have an account, pleas signup:</h3>
        <SignupForm
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          values={this.state}
          buttonName="Signup"
        />
      </div>
    );
  }
}

export default connect(null, { signup })(SignupFormContainer);
