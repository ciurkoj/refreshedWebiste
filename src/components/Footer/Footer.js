import React from "react";
import { Container, Box, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TableFooter } from "@material-ui/core";
import MailIcon from "@material-ui/icons/Mail";
import PhoneIcon from "@material-ui/icons/Phone";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import homePageStyles from "../../assets/jss/homePageStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import whiteLogo from "../../assets/img/lyraWhiteLogo.png";
const useStyles = makeStyles(homePageStyles);

export default function Footer() {
  const classes = useStyles();
  return (
    <div>
      <Container
        className={classes.footer}
        style={{
          minHeight: "200px",
          backgroundColor: "rgb(24 25 29)",
          fontFamily: "Arial",
        }}
      >
        <Grid container justify="space-around" style={{ marginTop: "2em" }}>
          <Grid item xs={8} sm={4} style={{ paddingBottom: "1em" }}>
            <img src={whiteLogo} style={{ width: "15rem" }}></img>
            <br />
            <Typography
              variant="h6"
              className={classes.title}
              style={{ paddingTop: "1em" }}
            >
              Visit us on:
            </Typography>
            <br />
            <a
              href="https://www.facebook.com/LyraElectronics"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.links}
            >
              <FacebookIcon className={classes.footerIcons} />
            </a>

            <a
              href="https://www.linkedin.com/company/lyra-electronics-limited"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.links}
            >
              <LinkedInIcon className={classes.footerIcons} />
            </a>
            <a
              href="https://twitter.com/LyraElectronics"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <TwitterIcon className={classes.footerIcons} />
            </a>
          </Grid>
          <Grid item xs={12} sm={4} style={{ marginBottom: "2rem" }}>
            <Typography variant="h5" className={classes.title}>
              Navigation:
            </Typography>
            <List component="nav" style={{ padding: "0", margin: "0" }}>
              <ListItem button dense>
                <ListItemText primary="About" />
              </ListItem>
              <ListItem button dense>
                <ListItemText primary="Services" />
              </ListItem>
              <ListItem button dense>
                <ListItemText primary="Testimonials" />
              </ListItem>
              <ListItem button dense>
                <ListItemText primary="Carrers" />
              </ListItem>
              <ListItem button dense>
                <ListItemText primary="Terms &amp; Conditions" />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h5" style={{ marginBottom: "0.5rem" }}>
              Contact us:
            </Typography>
            Lyra Electronics, <br /> Warwick Enterprise Centre (HRI)
            <br />
            Wellesbourne Warwickshire CV35 9EF
            <br />
            <Grid
              container
              //   style={{ marginTop: "1rem", marginBottom: "1rem" }}
              alignItems="center"
            >
              <Grid item xs={12} style={{ marginTop: "1rem" }}>
                <a href="tel:01216679832" className={classes.contactLinks}>
                  <PhoneIcon /> 0121 667 9832
                </a>
              </Grid>

              <Grid item xs={12} style={{ marginTop: "1rem" }}>
                <a
                  className={classes.contactLinks}
                  href="mailto:sales@lyraelectronics.com"
                >
                  <MailIcon />
                  sales@lyraelectronics.com
                </a>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          style={{
            textAlign: "center",
            alignSelf: "self-end",
            marginTop: "2em",
          }}
        >
          Copyright © 2020 Lyra Electronics
        </Grid>
      </Container>
    </div>
  );
}
