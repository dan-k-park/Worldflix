import React, { useEffect } from "react";
import { connect } from 'react-redux';
import * as actions from '../../actions';
import FlixContainer from '../../containers/FlixContainer';


const Home = ({ name, code, newFlix, fetchNewFlix }) => {

  useEffect(() => {
      fetchNewFlix(code);
    // The array is called the dependency array which contains the values the effect depends on
  },[name])


  return (
    <div>
      New Titles in {name}
        <FlixContainer flix={newFlix}/> 
    </div>
  )
}

function mapStateToProps({ country, flix }) {
  return { 
    code: country.code,
    name: country.name,
    newFlix: flix.newFlix 
  };
}

export default connect(mapStateToProps, actions)(Home);
