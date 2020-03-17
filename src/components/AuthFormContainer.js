import React, { Component } from "react";
import { connect } from "react-redux";
import LoginFormContainer from "./LoginFormContainer";
import SignupFormContainer from "./SignupFormContainer";

class AuthFormContainer extends Component {
  render() {
    return (
      <div>
        <LoginFormContainer history={this.props.history} />
        <p>{this.props.errors}</p>
        <SignupFormContainer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    errors: state.errors
  };
}
export default connect(mapStateToProps)(AuthFormContainer);
