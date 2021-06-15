import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import FlixCard from '../components/FlixCard';
import { useStyles } from "./styles";

const FlixContainer = ({ flix }) => {
  useEffect(() => {
    console.log(flix[0])
  },[flix])
  const classes = useStyles();

  const renderFlix = () => flix.map(flix => {
    return <Grid item xs={12} sm={6} md={4}><FlixCard key={flix.netflixid} id={flix.netflixid} img={flix.image} title={flix.title}/></Grid>
  })

  return (
      <Grid container spacing={1} className={classes.root}>
        {renderFlix()}  
      </Grid>
  )
}

export default FlixContainer
