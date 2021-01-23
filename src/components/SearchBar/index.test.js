import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import SearchBar from "./index";

describe("SearchBar", () => {
  test("renders MovieList component", () => {
    render(<SearchBar onSubmit={jest.fn()} />);

    expect(screen.getByPlaceholderText("Search...")).toBeInTheDocument();
  });

  test("should able to type in search box", () => {
    render(<SearchBar onSubmit={jest.fn()} />);

    fireEvent.change(screen.getByPlaceholderText("Search..."), {
      target: { value: "JavaScript" },
    });
    expect(screen.getByRole("textbox")).toHaveValue("JavaScript");
  });

  test("should call submit function upon search submit", () => {
    const onSubmit = jest.fn();
    render(<SearchBar onSubmit={onSubmit} />);

    fireEvent.change(screen.getByPlaceholderText("Search..."), {
      target: { value: "JavaScript" },
    });
    expect(screen.getByRole("textbox")).toHaveValue("JavaScript");

    fireEvent.submit(screen.getByRole("button"));
    expect(onSubmit).toHaveBeenCalledTimes(1);
  });
});
