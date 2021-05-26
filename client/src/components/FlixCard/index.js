import React from "react";
import { Link, withRouter } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./styles";

const FlixCard = ({ id, img, title}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Film or show image"
          height="140"
          image={img}
          title="Contemplative Reptile"
        />
      </CardActionArea>
      <div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="p">
            {title}
          </Typography>
        </CardContent>
      <CardActions>
        {/* Eventually change the to= to a path with params for id */}
        <Button size="small" color="primary" component={Link} to={`/flix/${id}`}>
          More Info
        </Button>
      </CardActions>
      </div>
    </Card>
  );
};

export default withRouter(FlixCard);
