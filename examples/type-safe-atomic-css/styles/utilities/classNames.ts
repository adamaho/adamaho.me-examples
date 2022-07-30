import type { ClassNames } from "./utilities.css";

export const classNames = (...utilityClasses: ClassNames[]) => {
  return utilityClasses.join(" ");
};