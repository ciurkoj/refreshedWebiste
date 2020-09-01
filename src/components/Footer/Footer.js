import React from "react";
import { Container, Box, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import homePageStyles from "../../assets/jss/homePageStyles";

const useStyles = makeStyles(homePageStyles);

export default function Footer() {
  const classes = useStyles();
  return (
    <div>
      <Box
        className={classes.container}
        style={{ color: "black", minHeight: "200px" }}
      ></Box>
      <Container style={{ minHeight: "200px" }}></Container>
    </div>
  );
}
