import type { StyleRule } from "@vanilla-extract/css";
import { root } from "../root.css";

const bgColors = {
  ["bg-red-1"]: root.colors.red.red1,
  ["bg-red-2"]: root.colors.red.red2,
  ["bg-red-3"]: root.colors.red.red3,
  ["bg-red-4"]: root.colors.red.red4,
  ["bg-red-5"]: root.colors.red.red5,
  ["bg-red-6"]: root.colors.red.red6,
  ["bg-red-7"]: root.colors.red.red7,
  ["bg-red-8"]: root.colors.red.red8,
  ["bg-red-9"]: root.colors.red.red9,
  ["bg-red-10"]: root.colors.red.red10,
  ["bg-red-11"]: root.colors.red.red11,
  ["bg-red-12"]: root.colors.red.red12,

  ["bg-orange-1"]: root.colors.orange.orange1,
  ["bg-orange-2"]: root.colors.orange.orange2,
  ["bg-orange-3"]: root.colors.orange.orange3,
  ["bg-orange-4"]: root.colors.orange.orange4,
  ["bg-orange-5"]: root.colors.orange.orange5,
  ["bg-orange-6"]: root.colors.orange.orange6,
  ["bg-orange-7"]: root.colors.orange.orange7,
  ["bg-orange-8"]: root.colors.orange.orange8,
  ["bg-orange-9"]: root.colors.orange.orange9,
  ["bg-orange-10"]: root.colors.orange.orange10,
  ["bg-orange-11"]: root.colors.orange.orange11,
  ["bg-orange-12"]: root.colors.orange.orange12,

  ["bg-yellow-1"]: root.colors.yellow.yellow1,
  ["bg-yellow-2"]: root.colors.yellow.yellow2,
  ["bg-yellow-3"]: root.colors.yellow.yellow3,
  ["bg-yellow-4"]: root.colors.yellow.yellow4,
  ["bg-yellow-5"]: root.colors.yellow.yellow5,
  ["bg-yellow-6"]: root.colors.yellow.yellow6,
  ["bg-yellow-7"]: root.colors.yellow.yellow7,
  ["bg-yellow-8"]: root.colors.yellow.yellow8,
  ["bg-yellow-9"]: root.colors.yellow.yellow9,
  ["bg-yellow-10"]: root.colors.yellow.yellow10,
  ["bg-yellow-11"]: root.colors.yellow.yellow11,
  ["bg-yellow-12"]: root.colors.yellow.yellow12,

  ["bg-green-1"]: root.colors.green.green1,
  ["bg-green-2"]: root.colors.green.green2,
  ["bg-green-3"]: root.colors.green.green3,
  ["bg-green-4"]: root.colors.green.green4,
  ["bg-green-5"]: root.colors.green.green5,
  ["bg-green-6"]: root.colors.green.green6,
  ["bg-green-7"]: root.colors.green.green7,
  ["bg-green-8"]: root.colors.green.green8,
  ["bg-green-9"]: root.colors.green.green9,
  ["bg-green-10"]: root.colors.green.green10,
  ["bg-green-11"]: root.colors.green.green11,
  ["bg-green-12"]: root.colors.green.green12,

  ["bg-blue-1"]: root.colors.blue.blue1,
  ["bg-blue-2"]: root.colors.blue.blue2,
  ["bg-blue-3"]: root.colors.blue.blue3,
  ["bg-blue-4"]: root.colors.blue.blue4,
  ["bg-blue-5"]: root.colors.blue.blue5,
  ["bg-blue-6"]: root.colors.blue.blue6,
  ["bg-blue-7"]: root.colors.blue.blue7,
  ["bg-blue-8"]: root.colors.blue.blue8,
  ["bg-blue-9"]: root.colors.blue.blue9,
  ["bg-blue-10"]: root.colors.blue.blue10,
  ["bg-blue-11"]: root.colors.blue.blue11,
  ["bg-blue-12"]: root.colors.blue.blue12,

  ["bg-purple-1"]: root.colors.purple.purple1,
  ["bg-purple-2"]: root.colors.purple.purple2,
  ["bg-purple-3"]: root.colors.purple.purple3,
  ["bg-purple-4"]: root.colors.purple.purple4,
  ["bg-purple-5"]: root.colors.purple.purple5,
  ["bg-purple-6"]: root.colors.purple.purple6,
  ["bg-purple-7"]: root.colors.purple.purple7,
  ["bg-purple-8"]: root.colors.purple.purple8,
  ["bg-purple-9"]: root.colors.purple.purple9,
  ["bg-purple-10"]: root.colors.purple.purple10,
  ["bg-purple-11"]: root.colors.purple.purple11,
  ["bg-purple-12"]: root.colors.purple.purple12,

  ["bg-pink-1"]: root.colors.pink.pink1,
  ["bg-pink-2"]: root.colors.pink.pink2,
  ["bg-pink-3"]: root.colors.pink.pink3,
  ["bg-pink-4"]: root.colors.pink.pink4,
  ["bg-pink-5"]: root.colors.pink.pink5,
  ["bg-pink-6"]: root.colors.pink.pink6,
  ["bg-pink-7"]: root.colors.pink.pink7,
  ["bg-pink-8"]: root.colors.pink.pink8,
  ["bg-pink-9"]: root.colors.pink.pink9,
  ["bg-pink-10"]: root.colors.pink.pink10,
  ["bg-pink-11"]: root.colors.pink.pink11,
  ["bg-pink-12"]: root.colors.pink.pink12,

  ["bg-gray-1"]: root.colors.gray.gray1,
  ["bg-gray-2"]: root.colors.gray.gray2,
  ["bg-gray-3"]: root.colors.gray.gray3,
  ["bg-gray-4"]: root.colors.gray.gray4,
  ["bg-gray-5"]: root.colors.gray.gray5,
  ["bg-gray-6"]: root.colors.gray.gray6,
  ["bg-gray-7"]: root.colors.gray.gray7,
  ["bg-gray-8"]: root.colors.gray.gray8,
  ["bg-gray-9"]: root.colors.gray.gray9,
  ["bg-gray-10"]: root.colors.gray.gray10,
  ["bg-gray-11"]: root.colors.gray.gray11,
  ["bg-gray-12"]: root.colors.gray.gray12,
};

const textColors = {
  ["text-red-1"]: root.colors.red.red1,
  ["text-red-2"]: root.colors.red.red2,
  ["text-red-3"]: root.colors.red.red3,
  ["text-red-4"]: root.colors.red.red4,
  ["text-red-5"]: root.colors.red.red5,
  ["text-red-6"]: root.colors.red.red6,
  ["text-red-7"]: root.colors.red.red7,
  ["text-red-8"]: root.colors.red.red8,
  ["text-red-9"]: root.colors.red.red9,
  ["text-red-10"]: root.colors.red.red10,
  ["text-red-11"]: root.colors.red.red11,
  ["text-red-12"]: root.colors.red.red12,

  ["text-orange-1"]: root.colors.orange.orange1,
  ["text-orange-2"]: root.colors.orange.orange2,
  ["text-orange-3"]: root.colors.orange.orange3,
  ["text-orange-4"]: root.colors.orange.orange4,
  ["text-orange-5"]: root.colors.orange.orange5,
  ["text-orange-6"]: root.colors.orange.orange6,
  ["text-orange-7"]: root.colors.orange.orange7,
  ["text-orange-8"]: root.colors.orange.orange8,
  ["text-orange-9"]: root.colors.orange.orange9,
  ["text-orange-10"]: root.colors.orange.orange10,
  ["text-orange-11"]: root.colors.orange.orange11,
  ["text-orange-12"]: root.colors.orange.orange12,

  ["text-yellow-1"]: root.colors.yellow.yellow1,
  ["text-yellow-2"]: root.colors.yellow.yellow2,
  ["text-yellow-3"]: root.colors.yellow.yellow3,
  ["text-yellow-4"]: root.colors.yellow.yellow4,
  ["text-yellow-5"]: root.colors.yellow.yellow5,
  ["text-yellow-6"]: root.colors.yellow.yellow6,
  ["text-yellow-7"]: root.colors.yellow.yellow7,
  ["text-yellow-8"]: root.colors.yellow.yellow8,
  ["text-yellow-9"]: root.colors.yellow.yellow9,
  ["text-yellow-10"]: root.colors.yellow.yellow10,
  ["text-yellow-11"]: root.colors.yellow.yellow11,
  ["text-yellow-12"]: root.colors.yellow.yellow12,

  ["text-green-1"]: root.colors.green.green1,
  ["text-green-2"]: root.colors.green.green2,
  ["text-green-3"]: root.colors.green.green3,
  ["text-green-4"]: root.colors.green.green4,
  ["text-green-5"]: root.colors.green.green5,
  ["text-green-6"]: root.colors.green.green6,
  ["text-green-7"]: root.colors.green.green7,
  ["text-green-8"]: root.colors.green.green8,
  ["text-green-9"]: root.colors.green.green9,
  ["text-green-10"]: root.colors.green.green10,
  ["text-green-11"]: root.colors.green.green11,
  ["text-green-12"]: root.colors.green.green12,

  ["text-blue-1"]: root.colors.blue.blue1,
  ["text-blue-2"]: root.colors.blue.blue2,
  ["text-blue-3"]: root.colors.blue.blue3,
  ["text-blue-4"]: root.colors.blue.blue4,
  ["text-blue-5"]: root.colors.blue.blue5,
  ["text-blue-6"]: root.colors.blue.blue6,
  ["text-blue-7"]: root.colors.blue.blue7,
  ["text-blue-8"]: root.colors.blue.blue8,
  ["text-blue-9"]: root.colors.blue.blue9,
  ["text-blue-10"]: root.colors.blue.blue10,
  ["text-blue-11"]: root.colors.blue.blue11,
  ["text-blue-12"]: root.colors.blue.blue12,

  ["text-purple-1"]: root.colors.purple.purple1,
  ["text-purple-2"]: root.colors.purple.purple2,
  ["text-purple-3"]: root.colors.purple.purple3,
  ["text-purple-4"]: root.colors.purple.purple4,
  ["text-purple-5"]: root.colors.purple.purple5,
  ["text-purple-6"]: root.colors.purple.purple6,
  ["text-purple-7"]: root.colors.purple.purple7,
  ["text-purple-8"]: root.colors.purple.purple8,
  ["text-purple-9"]: root.colors.purple.purple9,
  ["text-purple-10"]: root.colors.purple.purple10,
  ["text-purple-11"]: root.colors.purple.purple11,
  ["text-purple-12"]: root.colors.purple.purple12,

  ["text-pink-1"]: root.colors.pink.pink1,
  ["text-pink-2"]: root.colors.pink.pink2,
  ["text-pink-3"]: root.colors.pink.pink3,
  ["text-pink-4"]: root.colors.pink.pink4,
  ["text-pink-5"]: root.colors.pink.pink5,
  ["text-pink-6"]: root.colors.pink.pink6,
  ["text-pink-7"]: root.colors.pink.pink7,
  ["text-pink-8"]: root.colors.pink.pink8,
  ["text-pink-9"]: root.colors.pink.pink9,
  ["text-pink-10"]: root.colors.pink.pink10,
  ["text-pink-11"]: root.colors.pink.pink11,
  ["text-pink-12"]: root.colors.pink.pink12,

  ["text-gray-1"]: root.colors.gray.gray1,
  ["text-gray-2"]: root.colors.gray.gray2,
  ["text-gray-3"]: root.colors.gray.gray3,
  ["text-gray-4"]: root.colors.gray.gray4,
  ["text-gray-5"]: root.colors.gray.gray5,
  ["text-gray-6"]: root.colors.gray.gray6,
  ["text-gray-7"]: root.colors.gray.gray7,
  ["text-gray-8"]: root.colors.gray.gray8,
  ["text-gray-9"]: root.colors.gray.gray9,
  ["text-gray-10"]: root.colors.gray.gray10,
  ["text-gray-11"]: root.colors.gray.gray11,
  ["text-gray-12"]: root.colors.gray.gray12,
};

const borderColors = {
  ["border-red-1"]: root.colors.red.red1,
  ["border-red-2"]: root.colors.red.red2,
  ["border-red-3"]: root.colors.red.red3,
  ["border-red-4"]: root.colors.red.red4,
  ["border-red-5"]: root.colors.red.red5,
  ["border-red-6"]: root.colors.red.red6,
  ["border-red-7"]: root.colors.red.red7,
  ["border-red-8"]: root.colors.red.red8,
  ["border-red-9"]: root.colors.red.red9,
  ["border-red-10"]: root.colors.red.red10,
  ["border-red-11"]: root.colors.red.red11,
  ["border-red-12"]: root.colors.red.red12,

  ["border-orange-1"]: root.colors.orange.orange1,
  ["border-orange-2"]: root.colors.orange.orange2,
  ["border-orange-3"]: root.colors.orange.orange3,
  ["border-orange-4"]: root.colors.orange.orange4,
  ["border-orange-5"]: root.colors.orange.orange5,
  ["border-orange-6"]: root.colors.orange.orange6,
  ["border-orange-7"]: root.colors.orange.orange7,
  ["border-orange-8"]: root.colors.orange.orange8,
  ["border-orange-9"]: root.colors.orange.orange9,
  ["border-orange-10"]: root.colors.orange.orange10,
  ["border-orange-11"]: root.colors.orange.orange11,
  ["border-orange-12"]: root.colors.orange.orange12,

  ["border-yellow-1"]: root.colors.yellow.yellow1,
  ["border-yellow-2"]: root.colors.yellow.yellow2,
  ["border-yellow-3"]: root.colors.yellow.yellow3,
  ["border-yellow-4"]: root.colors.yellow.yellow4,
  ["border-yellow-5"]: root.colors.yellow.yellow5,
  ["border-yellow-6"]: root.colors.yellow.yellow6,
  ["border-yellow-7"]: root.colors.yellow.yellow7,
  ["border-yellow-8"]: root.colors.yellow.yellow8,
  ["border-yellow-9"]: root.colors.yellow.yellow9,
  ["border-yellow-10"]: root.colors.yellow.yellow10,
  ["border-yellow-11"]: root.colors.yellow.yellow11,
  ["border-yellow-12"]: root.colors.yellow.yellow12,

  ["border-green-1"]: root.colors.green.green1,
  ["border-green-2"]: root.colors.green.green2,
  ["border-green-3"]: root.colors.green.green3,
  ["border-green-4"]: root.colors.green.green4,
  ["border-green-5"]: root.colors.green.green5,
  ["border-green-6"]: root.colors.green.green6,
  ["border-green-7"]: root.colors.green.green7,
  ["border-green-8"]: root.colors.green.green8,
  ["border-green-9"]: root.colors.green.green9,
  ["border-green-10"]: root.colors.green.green10,
  ["border-green-11"]: root.colors.green.green11,
  ["border-green-12"]: root.colors.green.green12,

  ["border-blue-1"]: root.colors.blue.blue1,
  ["border-blue-2"]: root.colors.blue.blue2,
  ["border-blue-3"]: root.colors.blue.blue3,
  ["border-blue-4"]: root.colors.blue.blue4,
  ["border-blue-5"]: root.colors.blue.blue5,
  ["border-blue-6"]: root.colors.blue.blue6,
  ["border-blue-7"]: root.colors.blue.blue7,
  ["border-blue-8"]: root.colors.blue.blue8,
  ["border-blue-9"]: root.colors.blue.blue9,
  ["border-blue-10"]: root.colors.blue.blue10,
  ["border-blue-11"]: root.colors.blue.blue11,
  ["border-blue-12"]: root.colors.blue.blue12,

  ["border-purple-1"]: root.colors.purple.purple1,
  ["border-purple-2"]: root.colors.purple.purple2,
  ["border-purple-3"]: root.colors.purple.purple3,
  ["border-purple-4"]: root.colors.purple.purple4,
  ["border-purple-5"]: root.colors.purple.purple5,
  ["border-purple-6"]: root.colors.purple.purple6,
  ["border-purple-7"]: root.colors.purple.purple7,
  ["border-purple-8"]: root.colors.purple.purple8,
  ["border-purple-9"]: root.colors.purple.purple9,
  ["border-purple-10"]: root.colors.purple.purple10,
  ["border-purple-11"]: root.colors.purple.purple11,
  ["border-purple-12"]: root.colors.purple.purple12,

  ["border-pink-1"]: root.colors.pink.pink1,
  ["border-pink-2"]: root.colors.pink.pink2,
  ["border-pink-3"]: root.colors.pink.pink3,
  ["border-pink-4"]: root.colors.pink.pink4,
  ["border-pink-5"]: root.colors.pink.pink5,
  ["border-pink-6"]: root.colors.pink.pink6,
  ["border-pink-7"]: root.colors.pink.pink7,
  ["border-pink-8"]: root.colors.pink.pink8,
  ["border-pink-9"]: root.colors.pink.pink9,
  ["border-pink-10"]: root.colors.pink.pink10,
  ["border-pink-11"]: root.colors.pink.pink11,
  ["border-pink-12"]: root.colors.pink.pink12,

  ["border-gray-1"]: root.colors.gray.gray1,
  ["border-gray-2"]: root.colors.gray.gray2,
  ["border-gray-3"]: root.colors.gray.gray3,
  ["border-gray-4"]: root.colors.gray.gray4,
  ["border-gray-5"]: root.colors.gray.gray5,
  ["border-gray-6"]: root.colors.gray.gray6,
  ["border-gray-7"]: root.colors.gray.gray7,
  ["border-gray-8"]: root.colors.gray.gray8,
  ["border-gray-9"]: root.colors.gray.gray9,
  ["border-gray-10"]: root.colors.gray.gray10,
  ["border-gray-11"]: root.colors.gray.gray11,
  ["border-gray-12"]: root.colors.gray.gray12,
};

/**
 * 
 * Generates a mapping of a value to a style rule
 */
function buildBackgroundColorClasses() {
  let classes = <{[key in keyof typeof bgColors]: StyleRule}>{};

  for (const [key, style] of Object.entries(bgColors)) {
    classes[key as keyof typeof bgColors] = {
      backgroundColor: style
    };
  }

  return classes;
}

/**
 * 
 * Generates a mapping of a value to a style rule
 */
 function buildTextColorClasses() {
  let classes = <{[key in keyof typeof textColors]: StyleRule}>{};

  for (const [key, style] of Object.entries(textColors)) {
    classes[key as keyof typeof textColors] = {
      color: style
    };
  }

  return classes;
}

/**
 * Generates a mapping of a value to a style rule
 */
 function buildBorderColorClasses() {
  let classes = <{[key in keyof typeof borderColors]: StyleRule}>{};

  for (const [key, style] of Object.entries(borderColors)) {
    classes[key as keyof typeof borderColors] = {
      color: style
    };
  }

  return classes;
}

export const backgroundColor = buildBackgroundColorClasses();
export const textColor = buildTextColorClasses();
export const borderColor = buildBorderColorClasses();
