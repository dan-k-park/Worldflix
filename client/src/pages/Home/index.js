import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import * as actions from '../../actions';
import FlixContainer from '../../containers/FlixContainer';


const Home = ({ country_name, newFlix }) => {

  return (
    <div>
      New Titles in {country_name}
      <FlixContainer flix={newFlix}/>
    </div>
  )
}

function mapStateToProps(state) {
  return { 
    country_name: state.location.country_name,
    newFlix: state.flix.newFlix 
  };
}

export default connect(mapStateToProps, actions)(Home);
