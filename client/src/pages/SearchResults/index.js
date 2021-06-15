import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import * as actions from "../../actions";
import FlixContainer from "../../containers/FlixContainer";

const fetchImdbData = async (title) => {
  const imdbResults = await axios({
    method: "GET",
    url: `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=${title}`,
  }).then((res) => {
    return res.data.Search;
  });
  return imdbResults;
};

const fetchNetflixData = async (imdbID) => {
  const netflixResult = await axios
    .get(
      `https://unogs-unogs-v1.p.rapidapi.com/aaapi.cgi?t=loadvideo&q=${imdbID}`,
      {
        headers: {
          "x-rapidapi-key": `${process.env.REACT_APP_UNOGS_API_KEY}`,
          "x-rapidapi-host": "unogs-unogs-v1.p.rapidapi.com",
        },
      }
    )
    .then((res) => {
      if (res.data.RESULT) {
        return res.data.RESULT.nfinfo;
      } else {
        return;
      }
    })
    .catch((err) => {
      console.error(err);
    });
  return netflixResult;
};

const getData = async (imdbArr) => {
  return Promise.all(imdbArr.map((item) => fetchNetflixData(item.imdbID)));
};

const SearchResults = ({ match, location, fetchFlixInfo, imdbResults }) => {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const title = new URLSearchParams(location.search).get("q");
    (async () => {
      const imdbData = await fetchImdbData(title);
      const netflixData = await getData(imdbData).then((data) => {
        data = data.filter((element) => {
          return element !== undefined;
        });
        return data;
      });
      setSearchResults(netflixData)
      console.log(searchResults)
    })();
  }, [location.search]);

  return (
    <div>
      <h1>
        The title you searched for is{" "}
        {new URLSearchParams(location.search).get("q")}
      </h1>
      <FlixContainer flix={searchResults} />
    </div>
  );
};

function mapStateToProps({ flix }) {
  return {
    imdbResults: flix.imdbResults,
  };
}

export default connect(mapStateToProps, actions)(SearchResults);
