import { globalStyle } from "@vanilla-extract/css";

// import the utilties here so ve can pick it up
import "~/styles/root.css";
import "~/styles/utilities/utilities.css";

globalStyle("html, body", {
  padding: 0,
  margin: 0,
  height: "100vh"
});

globalStyle("#__next", {
  height: "100%"
});

globalStyle("*", {
  boxSizing: "border-box"
});