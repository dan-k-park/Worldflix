import React, { useEffect } from "react";
import { connect } from 'react-redux';
import * as actions from '../../actions';
import FlixContainer from '../../containers/FlixContainer';


const Home = ({ name, code, newFlix, fetchNewFlix }) => {

  useEffect(() => {
      fetchNewFlix(code);
    // The array is called the dependency array which contains the values the effect depends on
  },[])


  return (
    <div>
      New Titles in {name}
      <FlixContainer flix={newFlix}/>
    </div>
  )
}

function mapStateToProps(state) {
  return { 
    code: state.country.code,
    name: state.country.name,
    newFlix: state.flix.newFlix 
  };
}

export default connect(mapStateToProps, actions)(Home);
