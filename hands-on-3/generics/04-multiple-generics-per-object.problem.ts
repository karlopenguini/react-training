import { expect, it } from "vitest";
import { Equal, Expect } from "../helpers/type-utils";

// Similar to before, your challenge is to use generic syntax so that a is typed as a string and b is typed as a number.
const returnBothOfWhatIPassIn = (params: { a: unknown; b: unknown }) => {
  return {
    first: params.a,
    second: params.b,
  };
};

it("Should return an object where a -> first and b -> second", () => {
  const result = returnBothOfWhatIPassIn({
    a: "a",
    b: 1,
  });

  expect(result).toEqual({
    first: "a",
    second: 1,
  });

  type test1 = Expect<
    Equal<
      typeof result,
      {
        first: string;
        second: number;
      }
    >
  >;
});