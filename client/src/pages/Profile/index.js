import React, { useEffect } from "react";
import FlixContainer from "../../containers/FlixContainer";
import { connect } from "react-redux";
import { fetchWatchlist } from "../../actions";

const Profile = ({ auth, fetchWatchlist, watchlist }) => {

  useEffect(() => {
    fetchWatchlist();
  },[]);

  return (
    <div>
      <h1>Welcome back {auth ? auth.firstName : null}</h1>
      {watchlist ? <FlixContainer flix={watchlist} /> : null}
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
