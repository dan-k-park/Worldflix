import React, { useEffect } from 'react';
import { connect } from "react-redux";
import * as actions from "../../actions";
import FlixContainer from '../../containers/FlixContainer';


const SearchResults = ({ match, location, fetchID }) => {
  useEffect(() => {
    // Remove ?q= query param
    const title = new URLSearchParams(location.search).get('q')
    console.log(title)
    fetchID(title)
  },[])

  return (
    <div>
    <h1>The title you searched for is {location.search}</h1>
    </div>
  )
}

export default connect(null, actions)(SearchResults)
