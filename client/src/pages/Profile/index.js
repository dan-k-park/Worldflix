import React, { useState, useEffect } from "react";
import FlixContainer from '../../containers/FlixContainer';
import { connect } from "react-redux";
import { api } from '../../services/api';
import { fetchWatchlist } from "../../actions";

const Profile = ({ auth, fetchWatchlist, watchlist }) => {

  useEffect(() => {
    fetchWatchlist();
  },[]);
  
  useEffect(() => {
    // (async () => {
    //   const netflixData = await api.getData(watchlistIDs).then((data) => {
    //     data = data.filter((element) => {
    //       return element !== undefined;
    //     });
    //     return data;
    //   });
    //   setSearchResults(netflixData)
    // })();
    console.log(watchlist)
  }, [watchlist])

  return (
    <div>
      <h1>Welcome back {auth ? auth.firstName : null}</h1>
      <FlixContainer flix={watchlist}/> 
    </div>
  );
};

function mapStateToProps({ auth, flix }) {
  return {
    auth,
    watchlist: flix.watchlist,
  };
}

export default connect(mapStateToProps, { fetchWatchlist })(Profile);
