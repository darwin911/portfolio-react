import { Github } from "./Github";
import React from "react";
import { render } from "@testing-library/react";

describe("Github component", () => {
  const { debug, baseElement } = render(<Github />);
  test("renders null when no data", () => {
    debug();
    expect(baseElement).toBeEmptyDOMElement();
  });
});
