import React, { useState } from "react";
import PropTypes from "prop-types";

import Card from "react-bootstrap/Card";
import style from "./index.module.scss";

const MovieCard = ({ movie }) => {
  const [imageSource, setImageSource] = useState(movie?.Poster);
  const fallbackImage =
    "https://image.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-260nw-1037719192.jpg";

  return (
    <Card className={`${style.card}`}>
      <Card.Img
        src={imageSource || fallbackImage}
        alt={movie?.Title + " Poster"}
        className={"col-4 p-0"}
        onError={() => setImageSource(fallbackImage)}
      />
      <Card.ImgOverlay className={`${style.container} offset-4 col-8 p-0 p-3`}>
        <Card.Title className={style.title}>{movie?.Title}</Card.Title>
        <Card.Subtitle className={`mb-3 text-muted ${style.subtitle}`}>
          {movie?.Year}
        </Card.Subtitle>
        <Card.Link className={style.link} href="#">View More</Card.Link>
      </Card.ImgOverlay>
    </Card>
  );
};
MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};
export default MovieCard;
