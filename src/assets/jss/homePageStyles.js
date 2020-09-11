import { container } from "./material-kit-react";
import pcb from "../img/pcb1.jpg";
import pcbM from "../img/pcbm.jpg";
const navBarStyles = {
  container: {
    zIndex: "12",
    color: "#FFFFFF",
    marginTop: "1em",
    background: "linear-gradient(rgba(255, 255, 255 ), rgba(255, 255, 255))",

    border: "50px",

    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
    ...container,
  },
  headerContainer: {
    maxWidth: "auto",
    height: "10rem",
    "@media (max-width: 400px)": {
      maxWidth: "100vw",
      height: "auto",
    },

    zIndex: "12",
    color: "#FFFFFF",
    marginTop: "1em",
    background: "linear-gradient(rgba(255, 255, 255 ), rgba(255, 255, 255))",

    border: "50px",

    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
    ...container,
  },
  headerLinksSection: {
    color: "#3C4858",
    width: "50%",
    flexWrap: "nowrap",
    "@media (max-width: 500px)": {
      display: "none",
    },
  },
  logo: {
    textAlign: "start",
    maxWidth: "20rem",
    "@media(max-width:400px)": {
      maxWidth: "90vw",
    },
    "@media(min-width:1100px)": {
      maxWidth: "28rem",
    },
  },
  headerLinks: {
    marginRight: "0.5em",

    display: "inline-flex",
    alignItems: "center",
    justifyContent: "flex-end",
    "& p": {
      "@media (max-width: 800px)": {
        display: "none",
      },
    },
    "& a": {
      textDecoration: "none",
      color: "inherit",
      display: "contents",
    },
  },
  subtitle: {
    fontSize: "1rem",
    marginLeft: "-30px",
    marginRight: "-30px",
    "@media (max-width: 960px)": {
      textAlign: "center",
    },
  },
  main: {
    background: "transparent",
    position: "relative",
    zIndex: "0",
    margin: "-10px",
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  },
  parallax: {
    position: "absolute",
    top: "0px",
    zIndex: "-1",
    width: "100%",
  },

  row: {
    height: "100px",
    flexDirection: "row",
    "@media (max-width: 960px)": {
      flexDirection: "row",
    },
  },
  services: {
    //width: "50rem",
    // height: "25vh",
    justifyContent: "space-around",
    borderRadius: "6px",
    //font: "400 2vh Arial",
    textAlign: "center",
    // padding: "1vw",
    marginBottom: "2rem",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    //background: "rgba(19, 111, 181, 0.05)",
  },
  image: {
    justifyContent: "center",
    // borderRadius: "6px",
    fontSize: "2vh",
    textAlign: "center",
    alignItems: "center",
    background: "rgba(19, 111, 181, 0.1)",
    // border: "5px solid ",
    // borderColor: "black",
    outline: "4px solid white",
    outlineOffset: "-10px",
    width: "100%",
  },
  description: {
    justifyContent: "center",
    alignItems: "center",
    justifyItems: "center",

    paddingLeft: "8rem",
    paddingRight: "8rem",
    "@media (max-width: 960px)": {
      paddingLeft: "0",
      paddingRight: "0",
      font: "100 1.2rem Arial ",
    },
  },
  servicesImage: {
    maxHeight: "   16rem",
    "@media (max-width: 960px)": {
      maxHeight: "10rem",
    },
    display: "inline",
    borderRadius: "4px",
    // paddingTop: "3em",
    // background: "rgba(19, 111, 181, 0.1)",
    backgroundSize: "auto",
  },
  footer: {
    zIndex: "12",
    color: "#FFFFFF",
    backgroundColor: "rgb(24 25 29)",
    border: "50px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
    ...container,
  },
  servicesIcon: {
    maxWidth: "4rem",
    display: "flex",
    margin: "auto",
  },
  footerIcons: {
    width: "4rem",
    height: "2rem",
  },
  links: {
    textDecoration: "none",
    color: "inherit",
  },
  contactLinks: {
    textDecoration: "none",
    color: "inherit",
    display: "flex",
    alignItems: "center",
  },

  landingCard: {
    display: "inline-flex",

    "@media (min-width: 520px)": {
      flexDirection: "column-reverse",
    },
    "@media (min-width: 960px)": {
      flexDirection: "row",
    },
  },
  landingCardBox: {
    minHeight: "20em",
    backgroundImage: `url(${pcb})`,
    "@media (max-width: 570px)": {
      backgroundImage: `url(${pcbM} )`,
    },
    backgroundSize: "cover",
    marginRight: "auto",
    marginLeft: "auto",
    marginBottom: "1rem",
    zIndex: "12",
    color: "#FFFFFF",
    marginTop: "1em",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
    ...container,
  },
  landingCardClients: {
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
    "@media (max-width: 520px)": {
      display: "none",
    },
  },
  whatWeDoSection: {
    textAlign: "center",
    font: "2rem Arial",
    fontWeight: "600",
    "& p": {
      "@media (max-width: 450px)": {
        display: "none",
      },
    },
  },
  whatWeDoDescription: {
    color: "rgba(81,88,106,1)",
    //   fontFamily: "'Raleway', sans-serif",
    font: "100 1.5rem Arial ", //sans-serif",
    textAlign: "justify",
    paddingLeft: "4rem",
    paddingRight: "4rem",
    "@media (max-width: 960px)": {
      paddingLeft: "1rem",
      paddingRight: "1rem",
    },
  },
};

export default navBarStyles;
