import React from "react";

import { Container } from "react-bootstrap";
import MovieList from "../components/MovieList";
import Header from "../components/Header";
import Loader from "../components/Loader";
import Error from "../components/Error";

const Search = () => {
  const movies = {}

  const onSearchSubmit = (searchText) => {
    
  };

  return (
    <>
      <Header onSearchSubmit={onSearchSubmit} />
      <Container>
        {movies?.loading ? (
          <Loader />
        ) : movies?.error ? (
          <Error text="Ohho, Error occured. Please try again!" />
        ) : movies?.data?.Search ? (
          <>
            <p className={"mt-3"}>
              {movies?.data?.totalResults} result(s) found.
            </p>
            <MovieList movies={movies?.data?.Search} />
          </>
        ) : null}
      </Container>
    </>
  );
};

export default Search;
