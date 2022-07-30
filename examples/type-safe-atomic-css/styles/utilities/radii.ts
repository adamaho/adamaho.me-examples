import { root } from "../root.css";

export const radii = {
  ["radius-xs"]: {
    borderRadius: root.radii.xs
  },
  ["radius-sm"]: {
    borderRadius: root.radii.sm
  },
  ["radius-base"]: {
    borderRadius: root.radii.base
  },
  ["radius-md"]: {
    borderRadius: root.radii.md
  },
  ["radius-lg"]: {
    borderRadius: root.radii.lg
  },
  ["radius-xl"]: {
    borderRadius: root.radii.xl
  }
} as const;