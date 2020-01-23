import React from "react";
import { render, fireEvent } from "@testing-library/react";
import FruitFilter from "./FruitFilter";

describe("FruitFilter", () => {
  it("should render the input box", () => {
    const { getByLabelText } = render(<FruitFilter />);
    const fruitFilterInput = getByLabelText("fruitFilter");

    expect(fruitFilterInput).toBeInTheDocument();
  });

  it("should render all the fruits on initialise", async () => {
    const { getAllByTestId } = render(<FruitFilter />);
    const fruitElementArr = getAllByTestId("fruit");

    expect(fruitElementArr).toHaveLength(6);
  });

  it("should render only items starting with 'ap' when filtered", () => {
    const { getByLabelText, getByText, getAllByTestId } = render(
      <FruitFilter />,
    );
    const filterInputBox = getByLabelText("fruitFilter");

    fireEvent.change(filterInputBox, { target: { value: "ap" } });

    expect(getAllByTestId("fruit")).toHaveLength(2);
    expect(getByText("apple")).toBeInTheDocument();
    expect(getByText("apricot")).toBeInTheDocument();
    expect(() => getByText("citrus")).toThrowError();
  });
});
