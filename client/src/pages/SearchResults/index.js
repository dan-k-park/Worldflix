import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import { api } from '../../services/api';
import FlixContainer from "../../containers/FlixContainer";

const SearchResults = ({ match, location }) => {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const title = new URLSearchParams(location.search).get("q");
    (async () => {
      const imdbData = await api.fetchImdbData(title);
      const netflixData = await api.getData(imdbData).then((data) => {
        data = data.filter((element) => {
          return element !== undefined;
        });
        return data;
      });
      setSearchResults(netflixData)
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
