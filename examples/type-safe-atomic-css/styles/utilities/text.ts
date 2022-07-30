import {root} from "../root.css";

export const fontFamily = {
  ["font-body"]: {
    fontFamily: root.font.family.body
  },
  ["font-heading"]: {
    fontFamily: root.font.family.heading
  }
} as const;

export const fontSize = {
  ["text-xxs"]: {
    fontSize: root.font.size.xxs
  },
  ["text-xs"]: {
    fontSize: root.font.size.xs
  },
  ["text-sm"]: {
    fontSize: root.font.size.sm
  },
  ["text-smd"]: {
    fontSize: root.font.size.smd
  },
  ["text-base"]: {
    fontSize: root.font.size.base
  },
  ["text-lg"]: {
    fontSize: root.font.size.lg
  },
  ["text-xl"]: {
    fontSize: root.font.size.xl
  },
  ["text-2xl"]: {
    fontSize: root.font.size["2xl"]
  }
} as const;

export const fontWeight = {
  ["font-normal"]: {
    fontSize: root.font.weight.normal
  },
  ["font-bold"]: {
    fontSize: root.font.weight.bold
  },
  ["font-black"]: {
    fontSize: root.font.weight.black
  },
} as const;