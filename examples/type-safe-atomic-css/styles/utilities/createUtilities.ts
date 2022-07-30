import { globalStyle } from "@vanilla-extract/css";
import type { StyleRule } from "@vanilla-extract/css";

type AtomicClassDefinition = {
  [property: string]: StyleRule;
};

type GetKeys<T extends object> = keyof T;

type GetKeysFromArray<Args extends ReadonlyArray<any>> =
  Args extends (infer ElementType)[]
    ? ElementType extends AtomicClassDefinition
      ? GetKeys<ElementType>
      : never
    : never;


export const createUtilities = <
    Args extends ReadonlyArray<AtomicClassDefinition>
>(
    ...args: Args
) => {
    let classNameMapping = <{
        [key in GetKeysFromArray<typeof args>]: string
    }>{};

    for (const arg of args) {
        for (const [key, style] of Object.entries(arg)) {
            const className = key;

            classNameMapping[key as GetKeysFromArray<typeof args>] = className;

            globalStyle(`.${className}`, style as StyleRule);
        }
    }
  return classNameMapping;
};


