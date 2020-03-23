import React, { Component } from "react";
import UserCabinet from "./UserCabinet";
import { connect } from "react-redux";
import { loadAuthor } from "../store/actions";

class UserCabinetContainer extends Component {
  componentDidMount() {
    if (this.props.user) {
      this.props.loadAuthor(this.props.user);
    }
  }
  render() {
    return <UserCabinet jwt={this.props.user} author={this.props.author} />;
  }
}

function mapStateToProps(state) {
  return {
    author: state.author,
    user: state.user
  };
}

export default connect(mapStateToProps, { loadAuthor })(UserCabinetContainer);
