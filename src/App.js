import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import "./App.css";
import EventsListContainer from "./components/EventsListContainer";
import Navbar from "./components/Navbar";
import AuthFormContainer from "./components/AuthFormContainer";
import EventDetailsContainer from "./components/EventDetailsContainer";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Navbar />
          <Route path="/" exact component={EventsListContainer} />
          <Route path="/login" exact component={AuthFormContainer} />
          <Route path="/events/:eventId" component={EventDetailsContainer} />
        </div>
      </Provider>
    );
  }
}

export default App;
