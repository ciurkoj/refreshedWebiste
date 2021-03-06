import React, { useRef, useEffect, useState } from "react";
import { Grid, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import homePageStyles from "../../../../assets/jss/homePageStyles";
import desingIcon from "../../../../assets/img/design-icon.jpg";
import desing from "../../../../assets/img/design.png";

import products from "../../../../assets/img/products.jpg";
import productIcon from "../../../../assets/img/product-icon.jpg";

import prototype from "../../../../assets/img/prototype.jpg";
import prototypeIcon from "../../../../assets/img/prototype-icon.svg";
import rdservice from "../../../../assets/img/r&dservice.jpeg";
import researchIcon from "../../../../assets/img/research-icon.jpg";
const useStyles = makeStyles(homePageStyles);

export default function Main() {
  const classes = useStyles();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const inputRef = useRef();
  const inputRef1 = useRef();

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    // window.addEventListener('resize',
    if (windowWidth > 600) {
      inputRef.current.style.order = 1;

      inputRef1.current.style.order = 1;
    } else if (windowWidth < 600) {
      inputRef.current.style.order = 0;
      inputRef1.current.style.order = 0;
    }
  }, [windowWidth]);
  return (
    <div>
      <Container className={classes.container} style={{ color: "black" }}>
        <Grid
          container
          style={{
            width: "auto",
            // background: "rgba(0, 0, 0 , 0.05)",
            display: "flex",
            borderRadius: "4px",
            margin: "2rem",
            paddingBottom: "2rem",
            // maxWidth: "fit-content",
            font: "100 1.5rem Arial",
          }}
        >
          <Grid container justify="center" direction="row">
            <Grid item xs={12} className={classes.whatWeDoSection}>
              {/* <h2>What we do</h2> */}
              <p>What we do</p>
              <Grid item md={12}>
                <p className={classes.whatWeDoDescription}>
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
            <Grid item xs={12} md={12} className={classes.services} id={1}>
              <Grid
                item
                sm={6}
                md={6}
                ref={inputRef}
                className={classes.description}
              >
                <img
                  alt="design-icon"
                  src={desingIcon}
                  className={classes.servicesIcon}
                ></img>
                <b>Design</b> <br />
                Lyra offers a full consultancy service, either as a ‘one-off’
                package or as a partner to your team.
              </Grid>
              <Grid item xs={12} sm={6} md={6} className={classes.image}>
                <img
                  alt="design"
                  src={desing}
                  className={classes.servicesImage}
                ></img>
              </Grid>
            </Grid>
            <Grid item xs={12} md={12} className={classes.services} id={2}>
              <Grid item sm={6} md={6} className={classes.description}>
                <img
                  alt="researchIcon"
                  src={researchIcon}
                  className={classes.servicesIcon}
                ></img>
                <b>Research &amp; Development</b> <br />
                Our goal is to push the boundaries of what has been achieved
                before.
              </Grid>
              <Grid item sm={6} md={6} className={classes.image}>
                <img
                  alt="rdservice"
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
            <Grid item xs={12} md={12} className={classes.services} id={3}>
              <Grid
                item
                ref={inputRef1}
                xs={12}
                sm={6}
                md={6}
                className={classes.description}
              >
                <img
                  alt="prototypeIcon"
                  src={prototypeIcon}
                  className={classes.servicesIcon}
                ></img>
                <b>Prototype Manufacture</b>
                <br />
                Lyra Electronics has a well-equipped prototype workshop, and the
                experienced staff to create your prototypes
              </Grid>{" "}
              <Grid item sm={6} md={6} className={classes.image}>
                <img
                  alt="prototype"
                  src={prototype}
                  className={classes.servicesImage}
                ></img>
              </Grid>
            </Grid>
            <Grid item xs={12} md={12} className={classes.services} id={4}>
              <Grid item xs={12} sm={6} md={6} className={classes.description}>
                <img
                  alt="productIcon"
                  src={productIcon}
                  className={classes.servicesIcon}
                ></img>
                <b>Products</b> <br />
                Lyra's products can be purchased as described or can be
                customised to a specific requirement.
              </Grid>
              <Grid item sm={6} md={6} className={classes.image}>
                <img
                  alt="products"
                  src={products}
                  className={classes.servicesImage}
                ></img>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
