import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./requests";

// const baseUrl = "https://image.tmdb.org/t/p/original";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetchHeader();
  }, []);

  const fetchHeader = async () => {
    try {
      let res = await axios.get(requests.fetchTrending);
    //   debugger;
      console.log(res);
      setMovie(
        res.data.results[
          Math.floor(Math.random() * res.data.results.length - 1)
        ]
      );
    } catch (err) {
      console.log(err);
    }
  };

  console.log(movie);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
            "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
        )`,
        backgroundPosition: "center center",
      }}
    >
      {/* div with 2 buttons, play & myLIst */}
      <div className="banner__contents">
        <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
        </div>
      </div>
    </header>
  );
};

export default Banner;
