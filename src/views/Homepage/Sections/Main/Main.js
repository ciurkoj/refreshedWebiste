import React from "react";
import { Box, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import homePageStyles from "../../../../assets/jss/homePageStyles";
import desing from "../../../../assets/img/design.png";
import products from "../../../../assets/img/products.jpg";
import prototype from "../../../../assets/img/prototype.jpg";
import rdservice from "../../../../assets/img/r&dservice.jpeg";
const useStyles = makeStyles(homePageStyles);

export default function Main() {
  const classes = useStyles();
  return (
    <div>
      <Box className={classes.container} style={{ color: "black" }}>
        <Grid item md={12}>
          <p
            style={{
              color: "black",
              fontFamily: "'Raleway', sans-serif",
              textAlign: "justify",
              paddingLeft: "2em",
              paddingRight: "2em",
            }}
          >
            We develop performance-enhancing and energy-saving power electronics
            for ‘green’ industrial applications. Our breadth of expertise covers
            high performance automotive to green power, aerospace, marine, rail
            and other industrial applications. We are battery, power
            electronics, and control electronics specialists. We offer complete
            solutions from concept through to production.
          </p>
        </Grid>{" "}
        <Grid
          container
          style={{
            background: "rgba(0, 0, 0 , 0.2)",
            display: "inline-flex",
            borderRadius: "4px",
          }}
        >
          <Grid container justify="center">
            <Grid item xs={12} style={{ textAlign: "center" }}>
              <h1>Our services</h1>
            </Grid>
            <Grid item xs={3}>
              <img src={desing} style={{ maxWidth: "200px" }}></img>
            </Grid>
            <Grid item xs={3}>
              <img src={rdservice} style={{ maxWidth: "200px" }}></img>
            </Grid>
            <Grid item xs={3}>
              <img src={prototype} style={{ maxWidth: "200px" }}></img>
            </Grid>
            <Grid item xs={3}>
              <img src={products} style={{ maxWidth: "200px" }}></img>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
