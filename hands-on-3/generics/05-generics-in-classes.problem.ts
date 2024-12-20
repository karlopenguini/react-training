import { expect, it } from "vitest";
import { Equal, Expect } from "../helpers/type-utils";

// Your challenge is to update the Component class so that we are able to pass in props with any shape.
export class Component {
  private props: unknown;

  constructor(props: unknown) {
    this.props = props;
  }

  getProps = () => this.props;
}

it("Should create an object containing props", () => {
  const component = new Component({ a: 1, b: 2, c: 3 });

  const result = component.getProps();

  expect(result).toEqual({ a: 1, b: 2, c: 3 });

  type tests = [
    Expect<Equal<typeof result, { a: number; b: number; c: number }>>,
  ];
});
