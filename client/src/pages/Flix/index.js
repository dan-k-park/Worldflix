import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { newWatchlist, deleteWatchlist } from "../../actions";
import axios from "axios";
import getUnicodeFlagIcon from "country-flag-icons/unicode";
import { IconButton, Paper } from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import { useStyles } from "./styles";

const Flix = ({ match, newWatchlist, deleteWatchlist, watchlist }) => {
  const classes = useStyles();

  const [flix, setFlix] = useState();
  const [loaded, setLoaded] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

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
      }).then((res) => {
        checkWatchlist(res.data.RESULT.nfinfo.netflixid);
        return res.data.RESULT;
      });
      setFlix(flixData);
    };
    fetchFlix();
  }, []);

  useEffect(() => {
    if (flix) {
      setLoaded(true);
    }
  }, [flix]);

  const checkWatchlist = (id) => {
    watchlist.forEach((listItem) => {
      listItem.netflixid == id ? setIsAdded(true) : setIsAdded(false);
    });
  };

  const toggleIsAdded = () => {
    setIsAdded(!isAdded)
  }

  const getCountryFlags = () =>
    flix["country"].map((country) => {
      return getUnicodeFlagIcon(country["ccode"].toUpperCase());
    });

  return (
    <>
      {loaded ? (
        <Paper className={classes.root}>
          <div className={classes.paperContent}>
            <img src={flix["nfinfo"]["image1"]} />
            <div>
              <h1>{flix["nfinfo"]["title"]}</h1>
              <p>{flix["nfinfo"]["synopsis"]}</p>

              {isAdded ? (
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="home"
                  onClick={() => deleteWatchlist(flix.nfinfo.netflixid)}
                >
                  <RemoveCircleIcon fontSize="large" />
                </IconButton>
              ) : (
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="home"
                  onClick={() => newWatchlist(flix.nfinfo)}
                >
                  <AddCircleIcon fontSize="large" />
                </IconButton>
              )}
            </div>
            {getCountryFlags()}
          </div>
        </Paper>
      ) : null}
    </>
  );
};

function mapStateToProps({ flix }) {
  return {
    watchlist: flix.watchlist,
  };
}

export default connect(mapStateToProps, { newWatchlist, deleteWatchlist })(Flix);
