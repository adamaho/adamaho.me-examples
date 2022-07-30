import { createGlobalTheme, createGlobalThemeContract } from "@vanilla-extract/css";

import { red, orange, yellow, green, blue, purple, pink, gray } from "@radix-ui/colors";

export const root = createGlobalThemeContract({
  colors: {
    red,
    orange,
    yellow,
    green,
    blue,
    purple,
    pink,
    gray
  },
  font: {
    family: {
      body: "",
      heading: ""
    },
    size: {
      xxs: "",
      xs: "",
      sm: "",
      smd: "",
      base: "",
      md: "",
      lg: "",
      xl: "",
      ["2xl"]: ""
    },
    weight: {
      normal: "",
      bold: "",
      black: ""
    }
  },
  radii: {
    xs: "",
    sm: "",
    base: "",
    md: "",
    lg: "",
    xl: ""
  },
  space: {
    px: "",
    xxs: "",
    xs: "",
    sm: "",
    smd: "",
    base: "",
    md: "",
    lg: "",
    xl: "",
    ["2xl"]: "",
    ["3xl"]: "",
    ["4xl"]: "",
    ["5xl"]: "",
    ["6xl"]: "",
  },
}, (_, path) => `aho-${path.join('-')}`);

createGlobalTheme(":root", root, {
  colors: {
    red,
    orange,
    yellow,
    green,
    blue,
    purple,
    pink,
    gray
  },
  font: {
    family: {
      body: "'Lato', sans-serif",
      heading: "'Encode sans', sans-serif",
    },
    size: {
      xxs: "8px",
      xs: "10px",
      sm: "12px",
      smd: "14px",
      base: "16px",
      md: "20px",
      lg: "28px",
      xl: "36px",
      ["2xl"]: "48px"
    },
    weight: {
      normal: "500",
      bold: "700",
      black: "900"
    }
  },
  radii: {
    xs: "2px",
    sm: "4px",
    base: "8px",
    md: "12px",
    lg: "16px",
    xl: "24px"
  },
  space: {
    px: "1px",
    xxs: "2px",
    xs: "4px",
    sm: "8px",
    smd: "12px",
    base: "16px",
    md: "20px",
    lg: "24px",
    xl: "28px",
    ["2xl"]: "32px",
    ["3xl"]: "36px",
    ["4xl"]: "40px",
    ["5xl"]: "44px",
    ["6xl"]: "48px",
  }
});


