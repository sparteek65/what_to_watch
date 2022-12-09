import React from "react";
import "./card.css";
import { Link } from "react-router-dom";

export const Card = (props) => {
  let ott_id = props.tmdb_id;

  if (ott_id === null) {
    ott_id = "";
  }

  let query = "/what_to_watch/detail?ott_id=" + ott_id;

  const handle_cache = () => {
    const Data = {
      title: props.title,
      description: props.description,
      vote_average: props.vote_average,
      release_date: props.release_date,
      image: props.image,
      backdrop: props.backdrop,
    };
    props.setcurrentOtt(Data);
  };

  return (
    <Link to={query}>
      <div
        className="card"
        style={{ borderRadius: "10px" }}
        onClick={() => {
          handle_cache();
        }}
      >
        <img
          src={"https://image.tmdb.org/t/p/w200/" + props.image}
          style={{ borderRadius: "10px" }}
        ></img>
      </div>
    </Link>
  );
};
