import React from 'react'
import Paper from '@material-ui/core/Paper';
import { useStyles } from "./styles";

const Flix = ({}) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <div className={classes.paperContent}>
        <h1>Image</h1>
        <h1>stuff</h1>
      </div>
    </Paper>
  )
}

export default Flix
