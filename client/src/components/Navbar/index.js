import React, { useState } from "react";
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

const navLinks = [{ title: `Log In`, path: `/login` }];

const Navbar = () => {
  const classes = useStyles();

  const [searchValue, setSearchValue] = useState("");

  const history = useHistory();

  const onSubmit = () => {
    history.push(`/search/?s=${searchValue}`);
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

export default Navbar;
