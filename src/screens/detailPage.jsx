import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import { api } from "../api/api";
import "./master.css";

export const DetailPage = ({ currentOtt, setcurrentOtt }) => {
  const useQuery = () => new URLSearchParams(useLocation().search);

  let query = useQuery();
  let pid = query.get("ott_id");

  useEffect(() => {
    // console.log(pid);

    return () => {};
  }, []);

  return (
    <div>
      <img
        src={"https://image.tmdb.org/t/p/original/" + currentOtt.backdrop}
        style={{ height: "650px", width: "100%" }}
      ></img>
      <div
        style={{
          height: "652px",
          width: "100%",
          backgroundColor: "#00000096",
          position: "relative",
          top: "-653px",
        }}
      ></div>
      <div className="" style={{}}>
        <img
          src={"https://image.tmdb.org/t/p/w500/" + currentOtt.image}
          style={{
            borderRadius: "10px",
            height: "300px",
            position: "absolute",
            top: "365px",
            left: "85px",
          }}
        ></img>
        <p className="ott_details title">{currentOtt.title}</p>
        <p className="ott_details vote"> {currentOtt.vote_average}</p>
        <p className="ott_details release">{currentOtt.release_date}</p>
        <p className="ott_details description">{currentOtt.description}</p>
      </div>
    </div>
  );
};
