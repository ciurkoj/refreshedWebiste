import React from "react";
import { Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import homePageStyles from "../../../../assets/jss/homePageStyles";
import pcb from "../../../../assets/img/pcb.png";
const useStyles = makeStyles(homePageStyles);

const LandingCard = () => {
  const classes = useStyles();
  return (
    <div>
      <Box
        className={classes.container}
        style={{
          minHeight: "30em",
          backgroundImage: "url(" + pcb + ")",
          marginRight: "auto",
          marginLeft: "auto",
        }}
      >
        <Grid
          container
          style={{ display: "inline-flex" }}
          justify="space-between"
        >
          <Grid
            item
            xs={3}
            style={{
              fontSize: "20pt",
              font: "caption",
              borderRadius: "6px",
              background: "rgba(19, 111 ,181 , 0.64)",
              boxShadow:
                "0 16px 24px 2px rgba(0, 0, 0, 0.2), 0 6px 30px 5px rgba(0, 0, 0, 0.2), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
              margin: "1em",
              height: "auto",
              maxHeight: "16em",
              paddingLeft: "1em",
              paddingRight: "1em",
              marginTop: "3em",
            }}
          >
            <h2> What out clients Say:</h2>
            <h3 style={{ marginBottom: "0", padding: "1em", paddingTop: "0" }}>
              Lyra Electronics are competent and creative partners in
              electronics design
            </h3>
            <h3 style={{ marginTop: "0", paddingLeft: "1em" }}>
              <i>~ B. Richards, Aeristech</i>
            </h3>
          </Grid>
          <Grid
            item
            md={5}
            style={{
              marginTop: "3em",
              font: "caption",

              maxHeight: "100px",
              marginBottom: "0",
            }}
          >
            <h1
              style={{
                marginBottom: "0",
                marginTop: "0",
                background: "rgba(19, 111 ,181 , 0.64)",
              }}
            >
              POWER MANAGEMENT SPECIALISTS
            </h1>
            <Grid>
              <h1
                style={{
                  marginBottom: "0",
                  marginTop: "0",
                  font: "caption",
                  background: "rgba(255, 255 ,255 , 0.64)",
                  fontSize: "18pt",
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                For more effiecient power and control electronics
              </h1>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default LandingCard;
