import React, { Component } from "react";
import { connect } from "react-redux";
import SignupForm from "./AuthForm";

class SignupFormContainer extends Component {
  state = { login: "", password: "", email: "" };
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

export default connect(null)(SignupFormContainer);
