import React, { useState } from "react";
import Styles from "../styles/movieCard.module.css";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
    const [load, setLoad] = useState(false)
  const firstExample = {
    size: 30,
    value: movie.vote_average,
    edit: true,
    onChange: (newValue) => {
      
    },
  };

  return (
    <Link to={`/detail/${movie.id}`} className={Styles.card}>
      <div className={Styles.cardImage}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
        />
      </div>
      <div className={Styles.info}>
        <h3>{movie.title}</h3>
        <ul>
          <li>
            <strong>Relase day: </strong>
            <small>{movie.release_date}</small>
          </li>
          <li>
            <strong>Language: </strong>
            <small>{movie.original_language}</small>
          </li>
          <li>
            <ReactStars {...firstExample} />
            <small>{movie.vote_count} votes</small>
          </li>
        </ul>
      </div>
    </Link>
  );
};

export default MovieCard;
