import React, { useState, useEffect } from "react";
import getUnicodeFlagIcon from "country-flag-icons/unicode";
import { connect } from "react-redux";
import * as actions from "../../actions";
import Paper from "@material-ui/core/Paper";
import { useStyles } from "./styles";

const Flix = ({ match, flix, fetchFlixInfo }) => {
  const classes = useStyles();

  useEffect(() => {
    fetchFlixInfo(match["params"]["id"]);
  }, [match, actions.fetchNewFlix]);

  const getCountryFlags = () =>
    flix["country"].map((country) => {
      return getUnicodeFlagIcon(country["ccode"].toUpperCase());
    });
  return (
    <>
      <Paper className={classes.root}>
        <div className={classes.paperContent}>
          <img src={flix["nfinfo"]["image1"]} />
          <div>
            <h1>{flix["nfinfo"]["title"]}</h1>
            <p>{flix["nfinfo"]["synopsis"]}</p>
          </div>
          {getCountryFlags()}
        </div>
      </Paper>
    </>
  );
};

function mapStateToProps({ flix }) {
  return {
    flix: flix["flixInfo"],
  };
}

export default connect(mapStateToProps, actions)(Flix);
