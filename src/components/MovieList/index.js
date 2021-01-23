import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";
import MovieCard from "../MovieCard";

const MovieList = ({ movies }) => (
  <Row className="mt-sm-2 mt-3">
    {movies?.map((movie) => {
      return (
        <Col
          xs={12}
          md={6}
          ld={4}
          className={"mt-sm-2 mb-sm-2 mt-3 mb-3"}
          key={movie?.imdbID}
        >
          <MovieCard movie={movie} />
        </Col>
      );
    })}
  </Row>
);
MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
};
export default MovieList;
