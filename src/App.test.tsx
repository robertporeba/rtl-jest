import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import React from "react";

test("button has correct initial color, and updates when clicked", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  expect(colorButton).toHaveStyle({ "background-color": "red" });

  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ "background-color": "blue" });
  expect(colorButton).toHaveTextContent("Change to red");
});
