import React from "react";
import { render, screen } from "@testing-library/react";

import Header from "./index";

describe("Header", () => {
  test("renders Header component", () => {
    render(<Header onSearchSubmit={jest.fn()} />);
  });

  test("should have header text", () => {
    render(<Header onSearchSubmit={jest.fn()} />);

    expect(screen.getByText("hey")).toBeInTheDocument();
    expect(screen.getByText("cinema")).toBeInTheDocument();
  });

  test("should have search box", () => {
    render(<Header onSearchSubmit={jest.fn()} />);

    expect(screen.getByPlaceholderText("Search...")).toBeInTheDocument();
  });
});
