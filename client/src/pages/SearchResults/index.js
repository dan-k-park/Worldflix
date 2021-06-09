import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import * as actions from "../../actions";
import FlixContainer from '../../containers/FlixContainer';


const SearchResults = ({ match, location, fetchFlixInfo, fetchResults, imdbResults }) => {

  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    const title = new URLSearchParams(location.search).get('q')
    fetchResults(title)
    imdbResults.forEach(title => {
      let result = fetchFlixInfo(title.imdbID)
      setSearchResults([...searchResults, result])
    })
  },[])

  return (
    <div>
    <h1>The title you searched for is {new URLSearchParams(location.search).get('q')}</h1>
    <FlixContainer flix={searchResults}/>
    </div>
  )
}

function mapStateToProps({ flix }) {
  return {
    imdbResults: flix.searchResults
  }
}

export default connect(mapStateToProps, actions)(SearchResults)
