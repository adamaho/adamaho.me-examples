import { createUtilities } from "./createUtilities";

import { backgroundColor, textColor, borderColor } from "./colors";

import { flex } from "./flex";

import {
  padding,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  paddingX,
  paddingY,
  margin,
  marginTop,
  marginRight,
  marginLeft,
  marginX,
  marginY
} from "./space";

import {
  fontFamily,
  fontSize,
  fontWeight
} from "./text";

import { radii } from "./radii";

import { 
 height,
  width
} from "./size";

const classes = createUtilities(
  backgroundColor,
  borderColor,
  fontFamily,
  fontSize,
  fontWeight,
  flex,
  height,
  margin,
  marginTop,
  marginRight,
  marginLeft,
  marginX,
  marginY,
  padding,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  paddingX,
  paddingY,
  radii,
  textColor,
  width
);

export type ClassNames = keyof typeof classes;
