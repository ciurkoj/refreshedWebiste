import React from "react";
import { Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import homePageStyles from "../../../../assets/jss/homePageStyles";
const useStyles = makeStyles(homePageStyles);

export default function Main() {
  const classes = useStyles();
  return (
    <div>
      <Box className={classes.container}>
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
        </Grid>
      </Box>
    </div>
  );
}
