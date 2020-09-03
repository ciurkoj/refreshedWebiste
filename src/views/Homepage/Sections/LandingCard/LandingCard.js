import React from "react";
import { Box, Grid, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import homePageStyles from "../../../../assets/jss/homePageStyles";
const useStyles = makeStyles(homePageStyles);

const LandingCard = () => {
  const classes = useStyles();
  return (
    <div>
      <Container className={classes.landingCardBox}>
        <Grid container className={classes.landingCard} justify="space-between">
          <Grid
            item
            xs={0}
            sm={8}
            md={6}
            className={classes.landingCardClients}
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
            sm={10}
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
      </Container>
    </div>
  );
};

export default LandingCard;
