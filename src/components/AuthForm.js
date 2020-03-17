import React, { Component } from "react";

class AuthForm extends Component {
  inputForm = props => {
    return (
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
          type="password"
          value={this.props.values.password}
          onChange={this.props.onChange}
          name="password"
        ></input>
        {props.children}
        <button type="submit">{this.props.buttonName}</button>
      </form>
    );
  };
  render() {
    if (this.props.values.hasOwnProperty("email")) {
      return (
        <this.inputForm>
          <input
            placeholder="email"
            type="email"
            value={this.props.values.email}
            onChange={this.props.onChange}
            name="email"
          ></input>
        </this.inputForm>
      );
    }
    return (
      <div>
        <this.inputForm />
      </div>
    );
  }
}

export default AuthForm;
