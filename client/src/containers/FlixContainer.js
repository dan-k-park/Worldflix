import React from 'react';
import Grid from '@material-ui/core/Grid';
import FlixCard from '../components/FlixCard';
import { useStyles } from "./styles";

const FlixContainer = ({ flix }) => {
  const classes = useStyles();

  const renderFlix = () => flix.map(flix => {
    let img
    // Search results and new titles returns objects with different keys
    flix.image ? img = flix.image : img = flix.image1;
    return <Grid item xs={12} sm={6} md={4}><FlixCard key={flix.imdbid} id={flix.netflixid} img={img} title={flix.title}/></Grid>
  })

  return (
      <Grid container spacing={1} className={classes.root}>
        {renderFlix()}  
      </Grid>
  )
}

export default FlixContainer
