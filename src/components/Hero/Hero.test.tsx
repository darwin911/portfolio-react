import { render, screen } from "@testing-library/react";

import { Hero } from "./Hero";
import React from "react";

test("renders hero title", () => {
  render(<Hero />);
  const titleText = screen.getByText(/Darwin Smith/i);
  expect(titleText).toBeInTheDocument();
  expect(titleText).toHaveTextContent("Darwin Smith");
});
