import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from 'react-redux';
import * as actions from './actions';
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import { CssBaseline } from "@material-ui/core";

class App extends Component {

  componentDidMount() {
    // see export statement to see why fetchUser is available as props
    this.props.fetchUser();
    this.props.getGeoInfo();
    this.props.fetchNewFlix();
  }

  render() {

    return (
      <Router>
        <CssBaseline />
        <Navbar />
        <Route exact path='/' component={Home} />
      </Router>
    );
  }
}

export default connect(null, actions)(App);