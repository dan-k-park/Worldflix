import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";  
import getUnicodeFlagIcon from "country-flag-icons/unicode";
import { connect } from "react-redux";
import * as actions from "../../actions";
import Paper from "@material-ui/core/Paper";
import { useStyles } from "./styles";

const Flix = ({ match, flix, fetchFlixInfo }) => {
  const classes = useStyles();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFlixInfo(match["params"]["id"]);
  }, [match]);

  const getCountryFlags = () =>
    flix["country"].map((country) => {
      return getUnicodeFlagIcon(country["ccode"].toUpperCase());
    });

  return (
    <>
      {loading ? null : (
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
      )}
    </>
  );
};

function mapStateToProps({ flix }) {
  return {
    flix: flix["flixInfo"],
  };
}

export default connect(mapStateToProps, actions)(Flix);
