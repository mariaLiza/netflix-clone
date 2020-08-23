import React, { useState, useEffect } from "react";
import axios from "axios";
import requests from "./requests";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(requests.fetchNetflixOriginals);
      debugger;
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    };
    fetchData();
  }, []);

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
