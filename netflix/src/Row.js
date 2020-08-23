import React, { useState, useEffect } from "react";
import axios from "./axios";

const baseUrl = "https://image.tmdb.org/t/p/original";

const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let res = await axios.get(fetchUrl);
      setMovies(res.data.results);
    };

    fetchData();
  }, [fetchUrl]);

  let moviesDisplay = movies.map((movie) => {
    return <img src={`${baseUrl}${movie.poster_path}`} alt={movie.name} />;
  });

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">{moviesDisplay}</div>
    </div>
  );
};

export default Row;
