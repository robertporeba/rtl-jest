import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import { replaceCamelWithSpaces } from "./App";

test("button has correct initial color, and updates when clicked", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", {
    name: "Change to MidnightBlue",
  });

  expect(colorButton).toHaveStyle({ "background-color": "MediumVioletRed" });

  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ "background-color": "MidnightBlue" });
  expect(colorButton).toHaveTextContent("Change to MediumVioletRed");
});

test("initial condidtions", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", {
    name: "Change to MidnightBlue",
  });
  expect(colorButton).toBeEnabled();

  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

test("button should be disabled while checkbox is checked", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", {
    name: "Change to MidnightBlue",
  });
  expect(colorButton).toBeEnabled();

  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();
  expect(checkbox).toBeChecked();

  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
  expect(checkbox).not.toBeChecked();
});

test("button should be gray while disabled", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", {
    name: "Change to MidnightBlue",
  });
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });

  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ "background-color": "gray" });

  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ "background-color": "MediumVioletRed" });

  fireEvent.click(colorButton);
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ "background-color": "gray" });

  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ "background-color": "MidnightBlue" });
});

describe("spaces before camel-case capital letters", () => {
  test("work for no inner capital letters", () => {
    expect(replaceCamelWithSpaces("Red")).toBe("Red");
  });
  test("work for one inner capital letter", () => {
    expect(replaceCamelWithSpaces("MidnightBlue")).toBe("Midnight Blue");
  });
  test("work for multiple inner capital letter", () => {
    expect(replaceCamelWithSpaces("MediumVioletRed")).toBe("Medium Violet Red");
  });
});
