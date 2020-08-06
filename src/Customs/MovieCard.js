import React from "react";
import "./MovieCard.scss";

const MovieCard = (props) => {
  return (
    <div className="card">
      <div className="card__avator">
        <img
          src={`./img/posters/${props.poster}`}
          alt=""
          className="card__img"
        />
        <div className="card__title">{props.title}</div>
        <div className="card__info">
          <div className="card__genre">{props.genre}</div>
          <div className="card__rating">{props.rating}</div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
