import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieDetail();
  }, []);

  const fetchMovieDetail = async () => {
    try {
      const response = await fetch(`http://www.omdbapi.com/?apikey=d1b4985&i=${id}`);
      const data = await response.json();
      if (data.Response === "True") {
        setMovie(data);
      } else {
        console.error('Error fetching movie details:', data.Error);
      }
    } catch (error) {
      console.error('Error fetching movie details:', error);
    }
  };

  if (!movie) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h2>{movie.Title}</h2>
      <p>{movie.Plot}</p>
      <p>Género: {movie.Genre}</p>
      <p>Duración: {movie.Runtime}</p>
      <img src={movie.Poster} alt={movie.Title} />
    </div>
  );
}

export default MovieDetail;