import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Catalog = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=d1b4985&s=avengers&type=movie&page=1`)
      .then((response) => response.json())
      .then((data) => {
        if (data.Search) {
          setMovies(data.Search);
        }
      })
      .catch((error) => console.log("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h2>Catálogo</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.imdbID}>
            <Link to={`/movie/${movie.imdbID}`}>{movie.Title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Catalog;