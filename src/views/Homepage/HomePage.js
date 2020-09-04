import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../../components/Header/Header";
import homePageStyles from "../../assets/jss/homePageStyles";
import LandingCard from "./Sections/LandingCard/LandingCard";
import Main from "./Sections/Main/Main";
import Footer from "../../components/Footer/Footer";
const useStyles = makeStyles(homePageStyles);

const HomePage = () => {
  const classes = useStyles();

  return (
    <div>
      <NavBar className={classes.NavBar} />
      <Header />
      {/* <Parallax
        className={classes.parallax}
        filter
        image={require("../../assets/img/closeup-technology-motherboards-PCB-Retro-computers-electronics-26875-wallhere.com.jpg")}
      /> */}
      <LandingCard />
      <Main />
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
    </div>
  );
};

export default HomePage;
