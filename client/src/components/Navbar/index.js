import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import SideDrawer from "../SideDrawer";
import {
  AppBar,
  Container,
  Toolbar,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import TheatersIcon from "@material-ui/icons/Theaters";
import SearchBar from "material-ui-search-bar";
import { useStyles } from "./styles";

const Navbar = ({ auth }) => {
  const classes = useStyles();
  const history = useHistory();

  const [searchValue, setSearchValue] = useState("");
  const [navLinks, setNavLinks] = useState([])

  useEffect(() => {
    auth ? setNavLinks([{ title: `My List`, path: `/profile/${auth.googleId}`}, { title: `Log Out`, path: `/api/logout` }]) : setNavLinks([{ title: `Log In`, path: `/auth/google` }])
  }, [auth])

  const onSubmit = () => {
    history.push(`/search/?q=${searchValue}`);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Container maxWidth="xl" className={classes.navbarDisplayFlex}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="home"
            component={Link}
            to="/"
          >
            <TheatersIcon fontSize="large" />
          </IconButton>
          <Hidden smDown>
            <List
              component="nav"
              aria-labelledby="main navigation"
              className={classes.navDisplayFlex}
            >
              <SearchBar
                value={searchValue}
                onChange={(newValue) => setSearchValue(newValue)}
                onRequestSearch={onSubmit}
              />
              {navLinks.map(({ title, path }) => (
                <a href={path} key={title} className={classes.linkText}>
                  <ListItem button>
                    <ListItemText primary={title} />
                  </ListItem>
                </a>
              ))}
            </List>
          </Hidden>
          <Hidden mdUp>
            <SideDrawer navLinks={navLinks} />
          </Hidden>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

function mapStateToProps({ auth }) {
  return { auth } // identical key value pair { auth: auth } = { auth }
}

export default connect(mapStateToProps)(Navbar);