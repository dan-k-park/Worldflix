import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from 'react-redux';
import * as actions from './actions';
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import Flix from './pages/Flix';
import { CssBaseline } from "@material-ui/core";

class App extends Component {

  componentDidMount() {
    this.props.fetchUser();
    this.props.getGeoInfo();
  }

  render() {

    return (
      <Router>
        <CssBaseline />
        <Navbar />
        <Route exact path='/' component={Home} />
        <Route exact path='/flix/:id' render={props => <Flix {...props} />} />
      </Router>
    );
  }
}

export default connect(null, actions)(App);