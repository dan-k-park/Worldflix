import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import { CssBaseline } from "@material-ui/core";

export default class App extends Component {
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
