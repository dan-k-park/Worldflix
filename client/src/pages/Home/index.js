import React from 'react'
import { connect } from 'react-redux';

const Home = ({ country_name }) => {
  return (
    <div>
      Top Titles in the {country_name}
    </div>
  )
}

function mapStateToProps({location}) {
  return { 
    country_name: location.country_name 
  };
}

export default connect(mapStateToProps)(Home);
