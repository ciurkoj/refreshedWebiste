import React from "react";
import { Grid, Toolbar, Button, AppBar, Link } from "@material-ui/core";
import MailIcon from "@material-ui/icons/Mail";
import PhoneIcon from "@material-ui/icons/Phone";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../../assets/img/lyra-electronics.png";
import styles from "../../assets/jss/homePageStyles";
const useStyles = makeStyles(styles);
export default function NameCard() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.headerContainer}>
        <Grid
          container
          alignItems="flex-start"
          alignContent="flex-start"
          justify="space-between"
          //   className={classes.row}
        >
          <Grid
            container
            justify="space-between"
            alignItems="center"
            style={{ flexWrap: "wrap" }}
          >
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              style={{
                textAlign: "start",
                padding: "0",
              }}
            >
              <img className={classes.logo} alt="complex" src={logo} />
            </Grid>
            <Grid
              container
              className={classes.headerLinksSection}
              justify="flex-end"
              alignContent="flex-end"
              alignItems="center"
            >
              <Grid item md={4} className={classes.headerLinks}>
                <a href="mailto:sales@lyraelectronics.com">
                  <MailIcon />
                  <p>sales@lyraelectronics.com</p>
                </a>
              </Grid>
              <Grid item md={3} className={classes.headerLinks}>
                <a href="tel:01216679832">
                  <PhoneIcon />
                  <p>0121 667 9832</p>
                </a>
              </Grid>

              <Grid item xs={1} className={classes.headerLinks}>
                <a
                  href="https://www.facebook.com/LyraElectronics"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FacebookIcon />
                </a>
              </Grid>
              <Grid item xs={1} className={classes.headerLinks}>
                <a
                  href="https://www.linkedin.com/company/lyra-electronics-limited"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon />
                </a>
              </Grid>
              <Grid item xs={1} className={classes.headerLinks}>
                <a
                  href="https://twitter.com/LyraElectronics"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TwitterIcon />
                </a>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <AppBar color="transparent" style={{ display: "none" }}>
          <Toolbar>
            <Button>Home</Button>
            <Button>About</Button>
            <Button>Services</Button>
            <Button>Products</Button>
            <Button>Case Studies</Button>
            <Button>Current Vacancies</Button>
            <Button>Innovate UK</Button>
          </Toolbar>
        </AppBar>

        <Grid container direction="row" justify="center" alignItems="center">
          <Button style={{ marginLeft: "1em", marginRight: "1em" }}>
            Home
          </Button>
          <Button style={{ marginLeft: "1em", marginRight: "1em" }}>
            About
          </Button>
          <Button style={{ marginLeft: "1em", marginRight: "1em" }}>
            Services
          </Button>
          <Button style={{ marginLeft: "1em", marginRight: "1em" }}>
            Products
          </Button>
          <Button style={{ marginLeft: "1em", marginRight: "1em" }}>
            Case Studies
          </Button>
          <Button style={{ marginLeft: "1em", marginRight: "1em" }}>
            Current Vacancies
          </Button>
          <Button style={{ marginLeft: "1em", marginRight: "1em" }}>
            Innovate UK
          </Button>
        </Grid>
      </div>
    </div>
  );
}
