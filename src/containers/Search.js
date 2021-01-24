import React, { useState } from "react";

import { Container, Alert } from "react-bootstrap";
import { useQuery } from "../hooks/useQuery";
import { SEARCH_MOVIE } from "../schema";
import MovieList from "../components/MovieList";
import Header from "../components/Header";
import Loader from "../components/Loader";
import Error from "../components/Error";
import Pagination from "../components/Pagination";

const Search = () => {
  const [movies, searchMovie, fetchNextMovies] = useQuery(SEARCH_MOVIE, {});
  const [currentPage, setCurrentPage] = useState();

  const onSearchSubmit = (searchText) => {
    setCurrentPage(1);
    searchMovie({ query: { s: searchText, type: "movie", page: 1 } });
  };

  const onPaginationClick = (page) => {
    setCurrentPage(page);
    fetchNextMovies({ query: { page } });
  };

  return (
    <>
      <Header onSearchSubmit={onSearchSubmit} />
      <Container>
        {movies?.loading ? (
          <Loader />
        ) : movies?.error ? (
          <Error text="Ohho, Error occured. Please try again!" />
        ) : movies?.data?.Error ? (
          <Error text={movies?.data?.Error} />
        ) : movies?.data?.Search ? (
          <div>
            <Alert variant={"success"} className={"mt-3"}>
              {movies?.data?.totalResults} result(s) found.
            </Alert>
            <MovieList movies={movies?.data?.Search} />
            <Pagination
              onClick={onPaginationClick}
              current={currentPage}
              total={movies?.data?.totalResults}
              size={10}
            />
          </div>
        ) : null}
      </Container>
    </>
  );
};

export default Search;
