import React from "react";
import { Box, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import homePageStyles from "../../../../assets/jss/homePageStyles";
import desingIcon from "../../../../assets/img/design-icon.png";
import desing from "../../../../assets/img/design.png";

import products from "../../../../assets/img/products.png";
import productIcon from "../../../../assets/img/product-icon.png";

import prototype from "../../../../assets/img/prototype.png";
import prototypeIcon from "../../../../assets/img/prototype-icon.svg";
import rdservice from "../../../../assets/img/r&dservice.jpeg";
import researchIcon from "../../../../assets/img/research-icon.png";
const useStyles = makeStyles(homePageStyles);

export default function Main() {
  const classes = useStyles();
  return (
    <div>
      <Box className={classes.container} style={{ color: "black" }}>
        <Grid
          container
          style={{
            // background: "rgba(0, 0, 0 , 0.05)",
            display: "flex",
            borderRadius: "4px",
            margin: "2rem",
            paddingBottom: "2rem",
            maxWidth: "fit-content",
            font: "100 1.5rem Arial",
          }}
        >
          <Grid container justify="center" direction="row">
            <Grid
              item
              xs={12}
              style={{
                textAlign: "center",
                font: "2rem Arial",
                fontWeight: "600",
              }}
            >
              {/* <h2>What we do</h2> */}
              What we do
              <Grid item md={12}>
                <p
                  style={{
                    color: "rgba(81,88,106,1)",
                    //   fontFamily: "'Raleway', sans-serif",
                    font: "100 1.5rem Arial ", //sans-serif",
                    textAlign: "justify",
                    paddingLeft: "4rem",
                    paddingRight: "4rem",
                  }}
                >
                  We develop performance-enhancing and energy-saving power
                  electronics for ‘green’ industrial applications. Our breadth
                  of expertise covers high performance automotive to green
                  power, aerospace, marine, rail and other industrial
                  applications. We are battery, power electronics, and control
                  electronics specialists. We offer complete solutions from
                  concept through to production.
                </p>
              </Grid>
            </Grid>
            <Grid item xs={12} md={12} className={classes.services}>
              <Grid item md={6} className={classes.image}>
                <img src={desing} className={classes.servicesImage}></img>
              </Grid>
              <Grid item md={6} className={classes.description}>
                <img src={desingIcon} className={classes.servicesIcon}></img>
                <b>Design</b> <br />
                Lyra offers a full consultancy service, either as a ‘one-off’
                package or as a partner to your team.
              </Grid>
            </Grid>
            <Grid item xs={12} md={12} className={classes.services}>
              <Grid item xs={12} md={6} className={classes.description}>
                <img src={researchIcon} className={classes.servicesIcon}></img>
                <b>Research &amp; Development</b> <br />
                Our goal is to push the boundaries of what has been achieved
                before.
              </Grid>
              <Grid item md={6} className={classes.image}>
                <img
                  src={rdservice}
                  className={classes.servicesImage}
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    objectPosition: "-50% 70%",
                  }}
                ></img>
              </Grid>
            </Grid>
            <Grid item xs={12} md={12} className={classes.services}>
              <Grid item md={6} className={classes.image}>
                <img src={prototype} className={classes.servicesImage}></img>
              </Grid>

              <Grid item xs={12} md={6} className={classes.description}>
                <img src={prototypeIcon} className={classes.servicesIcon}></img>
                <b>Prototype Manufacture</b>
                <br />
                Lyra Electronics has a well-equipped prototype workshop, and the
                experienced staff to create your prototypes
              </Grid>
            </Grid>
            <Grid item xs={12} md={12} className={classes.services}>
              <Grid item xs={12} md={6} className={classes.description}>
                <img src={productIcon} className={classes.servicesIcon}></img>
                <b>Products</b> <br />
                Lyra's products can be purchased as described or can be
                customised to a specific requirement.
              </Grid>
              <Grid item md={6} className={classes.image}>
                <img src={products} className={classes.servicesImage}></img>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
