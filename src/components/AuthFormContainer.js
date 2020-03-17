import React, { Component } from "react";
import { connect } from "react-redux";
import LoginFormContainer from "./LoginFormContainer";

class AuthFormContainer extends Component {
  render() {
    return (
      <div>
        <LoginFormContainer history={this.props.history} />
        <p>{this.props.errors}</p>
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
