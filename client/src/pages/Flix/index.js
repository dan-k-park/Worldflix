import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Paper from '@material-ui/core/Paper';
import { useStyles } from "./styles";

const Flix = ({ match, flix, fetchFlixInfo }) => {
  const classes = useStyles();

  useEffect(() => {
    fetchFlixInfo(match['params']['id'])
  }, [])

  return (
    <Paper className={classes.root}>
      <div className={classes.paperContent}>
        <h1>Image</h1>
        <h1>stuff</h1>
      </div>
    </Paper>
  )
}

function mapStateToProps({ flix }) {
  return {
    flix: flix['flixInfo']
  }
}

export default connect(mapStateToProps, actions)(Flix)
