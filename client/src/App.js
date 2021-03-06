import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "./actions";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Flix from "./pages/Flix";
import Profile from "./pages/Profile";
import SearchResults from "./pages/SearchResults";
import { CssBaseline } from "@material-ui/core";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
    this.props.getGeoInfo();
    this.props.fetchWatchlist();
  }

  render() {
    return (
      <Router>
        <CssBaseline />
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/flix/:id"
          render={(routerProps) => <Flix {...routerProps} />}
        />
        <Route
          exact
          path="/search"
          render={(routerProps) => <SearchResults {...routerProps} />}
        />
        <Route
          exact
          path="/profile/:id"
          render={(routerProps) => <Profile {...routerProps} />}
        />
      </Router>
    );
  }
}

export default connect(null, actions)(App);
