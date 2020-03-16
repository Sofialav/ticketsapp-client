import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>Hi</div>
      </Provider>
    );
  }
}

export default App;
