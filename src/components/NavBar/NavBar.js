import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import headerStyles from "../../assets/jss/headerStyles";
const useStyles = makeStyles(headerStyles);

export default function NavBar() {
  const classes = useStyles();

  return (
    <div>
      <AppBar color="transparent" className={classes.NavBar} position="static">
        <Toolbar></Toolbar>
      </AppBar>
    </div>
  );
}
