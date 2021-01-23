import React from "react";
import { render, screen } from "@testing-library/react";

import MovieCard from "./index";

describe("MovieCard", () => {
  test("renders MovieCard component", () => {
    render(
      <MovieCard
        movie={{
          Title: "Matrix",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
          Year: "2019",
        }}
      />
    );

    expect(screen.getByText("Matrix")).toBeInTheDocument();
    expect(screen.getByText("Year: 2019")).toBeInTheDocument();
    expect(screen.getByAltText("Matrix Poster")).toBeInTheDocument();
  });
});
