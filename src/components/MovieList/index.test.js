import React from "react";
import { render, screen } from "@testing-library/react";

import MovieList from "./index";

describe("MovieList", () => {
  test("renders MovieList component", () => {
    render(
      <MovieList
        movies={[
          {
            Title: "Matrix",
            Poster:
              "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
            Year: "2019",
            imdbID: "eke"
          },
          {
            Title: "Matrix Reloaded",
            Poster:
              "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
            Year: "2015",
            imdbID: "ala"
          },
        ]}
      />
    );

    expect(screen.getByText("Matrix")).toBeInTheDocument();
    expect(screen.getByText("Year: 2019")).toBeInTheDocument();
    expect(screen.getByAltText("Matrix Poster")).toBeInTheDocument();
    expect(screen.getByText("Matrix Reloaded")).toBeInTheDocument();
    expect(screen.getByText("Year: 2015")).toBeInTheDocument();
    expect(screen.getByAltText("Matrix Reloaded Poster")).toBeInTheDocument();
  });
});
