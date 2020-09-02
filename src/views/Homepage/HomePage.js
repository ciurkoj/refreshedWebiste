import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../../components/Header/Header";
import homePageStyles from "../../assets/jss/homePageStyles";
import { Container, Box, Grid } from "@material-ui/core";
import LandingCard from "./Sections/LandingCard/LandingCard";
import content from "../../assets/img/content.png";
import Main from "./Sections/Main/Main";
import Footer from "../../components/Footer/Footer";
const useStyles = makeStyles(homePageStyles);

const HomePage = () => {
  const classes = useStyles();

  return (
    <Container>
      <NavBar className={classes.NavBar} />
      <Header />
      {/* <Parallax
        className={classes.parallax}
        filter
        image={require("../../assets/img/closeup-technology-motherboards-PCB-Retro-computers-electronics-26875-wallhere.com.jpg")}
      /> */}
      {/* <LandingCard /> */}
      {/* <Main /> */}
      {/* <Box
        className={classes.container}
        style={{
          minHeight: "300em",
          backgroundImage: "url(" + content + ")",
          marginRight: "auto",
          marginLeft: "auto",
        }}
      ></Box> */}
      <Footer />
    </Container>
  );
};

export default HomePage;
