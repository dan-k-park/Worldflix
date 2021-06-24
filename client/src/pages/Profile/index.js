import React, { useState, useEffect } from "react";
import FlixContainer from "../../containers/FlixContainer";
import { connect } from "react-redux";
import { fetchWatchlist } from "../../actions";

const Profile = ({ auth, fetchWatchlist, watchlist }) => {

  const [test, setTest] = useState([])

  useEffect(() => {
    fetchWatchlist();
  },[]);

  useEffect(() => {
    setTest(watchlist.map(flix => {
      return flix.flixInfo
    }))
  }, [watchlist])
  return (
    <div>
      <h1>Welcome back {auth ? auth.firstName : null}</h1>
      {test ? <FlixContainer flix={test} /> : null}
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
