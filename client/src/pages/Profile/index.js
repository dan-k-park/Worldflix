import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchWatchlist } from "../../actions";

const Profile = ({ auth, watchlist }) => {
  useEffect(() => {
    fetchWatchlist();
  });

  const renderWatchlist = () => {
    return watchlist.map(netflixID => {
      return (
        <p>netflixID</p>
      )
    })
  }

  return (
    <div>
      <h1>Welcome back {auth ? auth.firstName : null}</h1>
      {renderWatchlist()}
    </div>
  );
};

function mapStateToProps({ auth, watchlist }) {
  return {
    auth,
    watchlist,
  };
}

export default connect(mapStateToProps, { fetchWatchlist })(Profile);
