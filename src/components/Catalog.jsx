import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Catalog = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get('search') || '';

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=d1b4985&s=${searchTerm}&type=movie&page=1`)
      .then((response) => response.json())
      .then((data) => {
        if (data.Search) {
          setMovies(data.Search);
        }
      })
      .catch((error) => console.log("Error fetching data:", error));
  }, [searchTerm]);

  return (
    <div className="catalog-container">
      <h2>Catálogo</h2>
      <div>
        <p>Resultados para: <strong>{searchTerm}</strong></p>
      </div>
      <ul className="movie-list">
        {movies.map((movie) => (
          <li key={movie.imdbID}>
            <Link to={`/movie/${movie.imdbID}`} className="movie-link">{movie.Title}</Link>
          </li>
        ))}
      </ul>
      <div className="button-container">
        <Link to="/" className="btn">Volver al buscador</Link>
      </div>
    </div>
  );
};

export default Catalog;