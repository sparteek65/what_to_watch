import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { api } from "../api/api";
import { Card } from "../components/movie/card.jsx";
import { useLocation } from "react-router-dom";

export const HomeScreen = ({ currentOtt, setcurrentOtt }) => {
  const [recommendation_data, setrecommendation_data] = useState([{}]);
  const useQuery = () => new URLSearchParams(useLocation().search);
  let query = useQuery();

  useEffect(() => {
    let pid = query.get("profile_id");
    if (pid === null) {
      pid = "3a0d184c08f8485d9fcdd0e2ced4bb58";
    }
    let url = "/recommendation/recommend/?user_id=" + pid;
    console.log(pid);
    api
      .get(url)
      .then((response) => response.data)
      .then(setrecommendation_data);
    return () => {};
  }, []);
  return (
    <div
      className="recommendation_row"
      style={{
        display: "flex",
        columnGap: "10px",
        flexWrap: "wrap",
        margin: "20px",
        justifyContent: "space-evenly",
        rowGap: "10px",
      }}
    >
      {recommendation_data.map((data) => {
        return (
          <Card
            currentOtt={currentOtt}
            setcurrentOtt={setcurrentOtt}
            image={data.poster_path}
            tmdb_id={data.tmdb_id}
            title={data.title}
            release_date={data.release_date}
            description={data.overview}
            vote_average={data.vote_average}
            backdrop={data.backdrop_path}
          />
        );
      })}
    </div>
  );
};
