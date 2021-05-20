import React, { useState } from "react";
import {
  IconButton,
  List,
  ListItem,
  ListItemText,
  Drawer,
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import { useStyles } from "./styles";

const SideDrawer = ({ navLinks }) => {
  const [state, setState] = useState({ right: false });

  const classes = useStyles();

  const toggleDrawer = (anchor, open) => (e) => {
    if (e.type === "keydown" && (e.key === "Tab" || e.key === "shift")) {
      return;
    }
    setState({ [anchor]: open });
  };

  const sideDrawerList = (anchor) => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List component="nav">
        {navLinks.map(({ title, path }) => (
          <a href={path} key={title} className={classes.linkText}>
            <ListItem button>
              <ListItemText primary={title} />
            </ListItem>
          </a>
        ))}
      </List>
    </div>
  );

  return (
    <>
      <IconButton
        edge="start"
        aria-label="menu"
        onClick={toggleDrawer("right", true)}
      >
        <Menu fontSize="large" style={{ color: `white` }} />
      </IconButton>
      <Drawer
        anchor="right"
        open={state.right}
        onOpen={toggleDrawer("right", true)}
        onClose={toggleDrawer("right", false)}
      >
        {sideDrawerList("right")}
      </Drawer>
    </>
  );
};

export default SideDrawer;
