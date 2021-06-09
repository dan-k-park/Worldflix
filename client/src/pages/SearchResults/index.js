import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Link,
  useLocation
} from "react-router-dom";
import FlixContainer from '../../containers/FlixContainer';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const SearchResults = ({ match, location }) => {
  useEffect(() => {
    const params = new URLSearchParams(location.search)
    console.log(params.get('q'))
  },[])

  return (
    <div>
    <h1>The title you searched for is {location.search}</h1>
    </div>
  )
}

export default SearchResults
