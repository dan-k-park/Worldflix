import React, { useState, useEffect } from "react";
import axios from 'axios';
import getUnicodeFlagIcon from "country-flag-icons/unicode";
import {IconButton, Paper} from "@material-ui/core";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { useStyles } from "./styles";

const Flix = ({ match }) => {
  const classes = useStyles();

  const [flix, setFlix] = useState()
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
      const fetchFlix = async () => {
        const flixData = await axios({
        method: "GET",
        url: "https://unogs-unogs-v1.p.rapidapi.com/aaapi.cgi",
        headers: {
          "x-rapidapi-key": `${process.env.REACT_APP_UNOGS_API_KEY}`,
          "x-rapidapi-host": "unogs-unogs-v1.p.rapidapi.com",
        },
        params: {
          q: `${match["params"]["id"]}`,
          t: "loadvideo",
        },
      })
      .then(res => {
        return res.data.RESULT
      })
      setFlix(flixData)
    }
    fetchFlix();
  }, []);

  useEffect(() => {
    if (flix) {
      setLoaded(true)
    }
  },[flix])

  const getCountryFlags = () =>
    flix["country"].map((country) => {
      return getUnicodeFlagIcon(country["ccode"].toUpperCase());
    });

  return (
    <>
    {loaded ? <Paper className={classes.root}>
        <div className={classes.paperContent}>
          <img src={flix["nfinfo"]["image1"]}/>
          <div>
            <h1>{flix["nfinfo"]["title"]}</h1>
            <p>{flix["nfinfo"]["synopsis"]}</p>
            <IconButton
            edge="start"
            color="inherit"
            aria-label="home"
            onClick={() => alert('clicked!')}
          >
            <AddCircleIcon fontSize="large" />
          </IconButton>
          </div>
          {getCountryFlags()}
        </div>
      </Paper>: null}
    </>
  );
};
export default Flix;
