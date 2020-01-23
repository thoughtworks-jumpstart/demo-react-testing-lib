import React from "react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { render, waitForElement } from "@testing-library/react";
import TestingAxios from "./TestingAxios";

const mockAxiosAdapter = new MockAdapter(axios);

describe("TestingAxios", () => {
  it("should render post title", async () => {
    mockAxiosAdapter
      .onGet("https://jsonplaceholder.typicode.com/posts/1")
      .reply(200, {
        title: "title for testing",
      });
    const { getByText } = render(<TestingAxios />);

    const titleText = await waitForElement(() =>
      getByText("title for testing"),
    );
    expect(titleText).toBeInTheDocument();
  });
});
