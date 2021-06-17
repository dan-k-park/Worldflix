import React, { useEffect } from 'react'
import { connect } from 'react-redux';

const Profile = ({ auth }) => {
  return (
    <div>
      <h1>Welcome back {auth ? auth.firstName : null}</h1>
    </div>
  )
}

function mapStateToProps({ auth }) {
  return { auth } // identical key value pair { auth: auth } = { auth }
}

export default connect(mapStateToProps)(Profile);