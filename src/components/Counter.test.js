import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

describe("Counter", () => {
  it("should render Counter Value with 0 after initialisation", () => {
    const { getByText } = render(<Counter />);

    const counterValue = getByText("Counter Value: 0");
    expect(counterValue).toBeInTheDocument();
  });

  it("should render +1 button when initialise", () => {
    const { getByText } = render(<Counter />);

    const incrementButton = getByText("+1");
    expect(incrementButton).toBeInTheDocument();
  });

  it("should increase counter value to 1 after clicking incrementButton", () => {
    const { getByText } = render(<Counter />);

    const incrementButton = getByText("+1");
    fireEvent.click(incrementButton);

    const counterValue = getByText("Counter Value: 1");
    expect(counterValue).toBeInTheDocument();
  });
});
