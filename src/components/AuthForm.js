import React, { Component } from "react";

class AuthForm extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <input
            placeholder="username"
            type="text"
            value={this.props.values.login}
            onChange={this.props.onChange}
            name="login"
          ></input>
          <input
            placeholder="password"
            type="text"
            value={this.props.values.password}
            onChange={this.props.onChange}
            name="password"
          ></input>
          <button type="submit">{this.props.buttonName}</button>
        </form>
      </div>
    );
  }
}

export default AuthForm;
