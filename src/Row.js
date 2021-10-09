import React, { useEffect, useState } from "react";

import axios from "./axios";
import "./Row.css";

function Row({ title, fetchUrl, isLargerow = false }) {
  const [movies, setMovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original";
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  console.log("MOVIES", movies);
  return (
    <div className="row">
      <h2>{title} </h2>

      <div className="row_posters">
        {movies.map(
          (movie) =>
            (isLargerow && movie.poster_path) ||
            (!isLargerow && movie.backdrop_path && (
              <img
                className={`row__poster ${isLargerow && "row_posterLarge"}`}
                key={movie.id}
                src={`${base_url}${
                  isLargerow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            ))
        )}
      </div>
    </div>
  );
}

export default Row;
