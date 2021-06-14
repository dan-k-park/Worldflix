import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import * as actions from "../../actions";
import FlixContainer from '../../containers/FlixContainer';


const SearchResults = ({ match, location, fetchFlixInfo, fetchImdbResults, fetchNetflixResults, imdbResults }) => {

  const [searchResults, setSearchResults] = useState([])
  const [searchTitle, setSearchTitle] = useState('')

  useEffect(() => {
    const title = new URLSearchParams(location.search).get('q')
    setSearchTitle(title)
  },[])

  useEffect(() => {
    (async () => {
      const imdbResults = await fetchImdbResults(searchTitle)
    })()
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
