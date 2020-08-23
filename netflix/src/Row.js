import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
import requests from "./requests";

const baseUrl = "https://image.tmdb.org/t/p/original";

const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    };

    fetchData();
  }, [fetchUrl]);

//   let moviesDisplay = movies.map((movie) => {
//     return (
//       <img
//         className="row__poster"
//         src={`${baseUrl}${movie.poster_path}`}
//         alt={movie.name}
//       />
//     );
//   });

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {movies.map((movie) => (
          <img
            className="row__poster"
            src={`${baseUrl}${movie.poster_path}`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Row;
