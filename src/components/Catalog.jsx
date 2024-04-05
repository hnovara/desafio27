import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Catalog() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await fetch('http://www.omdbapi.com/?apikey=d1b4985&s=movie');
      const data = await response.json();
      if (data.Response === "True") {
        setMovies(data.Search);
      } else {
        console.error('Error fetching movies:', data.Error);
      }
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  return (
    <div>
      <h2>Catálogo de Películas</h2>
      <ul>
        {movies.map(movie => (
          <li key={movie.imdbID}>
            <Link to={`/movie/${movie.imdbID}`}>{movie.Title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Catalog;