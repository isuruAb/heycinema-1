import React from "react";
import { render, screen } from "@testing-library/react";

import Pagination from "./index";

describe("Pagination", () => {
  test("renders Pagination component with 6 blocks from 1 to 6 for current page 1", () => {
    render(
      <Pagination onClick={jest.fn()} current={1} total={100} size={10} />
    );

    for (let i = 1; i <= 6; i++) {
      expect(screen.getByText("" + i)).toBeInTheDocument();
    }
  });

  test("renders Pagination component with 6 blocks from 4 to 10 for current page 1", () => {
    render(
      <Pagination onClick={jest.fn()} current={6} total={100} size={10} />
    );

    for (let i = 3; i <= 9; i++) {
      expect(screen.getByText("" + i)).toBeInTheDocument();
    }
  });

  test("renders Pagination component with no block only for only 5 record", () => {
    render(<Pagination onClick={jest.fn()} current={1} total={5} size={10} />);

    expect(screen.queryByText("1")).not.toBeInTheDocument();
    expect(screen.queryByText("2")).not.toBeInTheDocument();
  });

  test("renders Pagination component with 2 block only for only 11 record", () => {
    render(<Pagination onClick={jest.fn()} current={1} total={11} size={10} />);

    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.queryByText("3")).not.toBeInTheDocument();
  });
});
