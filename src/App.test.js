import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("should render Counter component when Counter link is clicked on", () => {
    const { getByTestId, getByText } = render(<App />);

    const counterLink = getByText("Counter");
    fireEvent.click(counterLink);

    const counterComponent = getByTestId("Counter");
    expect(counterComponent).toBeInTheDocument();
  });

  it("should render Fruit Filter component", () => {
    const { getByTestId, getByText } = render(<App />);

    const filterLink = getByText("Filter");
    fireEvent.click(filterLink);

    const fruitFilter = getByTestId("fruit-filter");
    expect(fruitFilter).toBeInTheDocument();
  });

  it("should render axios component when axios link is clicked on", () => {
    const { getByTestId, getByText } = render(<App />);

    const axiosLink = getByText("Axios");
    fireEvent.click(axiosLink);

    const axiosComponent = getByTestId("testing-axios");
    expect(axiosComponent).toBeInTheDocument();
  });
});
