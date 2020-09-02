import { container } from "./material-kit-react";

const navBarStyles = {
  container: {
    // "@media (min-width: 400px)": {
    //   maxWidth: "90%",
    // },
    // "@media (min-width: 576px)": {
    //   maxWidth: "440px",
    // },
    // "@media (min-width: 768px)": {
    //   maxWidth: "680px",
    // },
    // "@media (min-width: 992px)": {
    //   maxWidth: "720px",
    // },
    // "@media (min-width: 1200px)": {
    //   maxWidth: "1260px",
    // },
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
    "@media (max-width: 450px)": {
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
  image: {
    textAlign: "start",
    maxWidth: "400px",
    "@media (max-width: 960px) ": {
      //   maxWidth: "200px",
    },
    "@media (max-width: 600px)": {
      width: "100%",
    },
  },

  row: {
    height: "100px",
    flexDirection: "row",
    "@media (max-width: 960px)": {
      flexDirection: "row",
    },
  },
  services: {
    width: "50rem",
    // height: "25vh",
    justifyContent: "space-around",
    borderRadius: "6px",
    //font: "400 2vh Arial",
    textAlign: "center",
    // padding: "1vw",
    // margin: "20px",
    display: "flex",
    alignItems: "center",
    //background: "rgba(19, 111, 181, 0.05)",
  },
  image: {
    width: "25rem",
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
  },
  description: {
    justifyContent: "center",
    alignItems: "center",
    justifyItems: "center",
    paddingLeft: "8rem",
    paddingRight: "8rem",
  },
  servicesImage: {
    // width: "100%",
    maxHeight: "20rem",
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
};

export default navBarStyles;
