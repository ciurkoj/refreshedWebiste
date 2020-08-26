import { container } from "./material-kit-react";

const navBarStyles = {
  container: {
    "@media (min-width: 400px)": {
      maxWidth: "90%",
    },
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
    "@media (min-width: 400px)": {
      maxWidth: "90%",
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
  links: {
    marginRight: "0.5em",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "flex-end",
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
      alignContent: "flex-start",
    },
  },
};

export default navBarStyles;
