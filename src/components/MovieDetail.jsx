import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=d1b4985&i=${id}`)
      .then((response) => response.json())
      .then((data) => {
        setMovie(data);
      })
      .catch((error) => console.log("Error fetching data:", error));
  }, [id]);

  return (
    <div className="movie-detail-container">
      {movie && (
        <div>
          <h2>{movie.Title}</h2>
          <img src={movie.Poster} alt={movie.Title} />
          <p><strong>Año:</strong> {movie.Year}</p>
          <p><strong>Director:</strong> {movie.Director}</p>
          <p><strong>Sinopsis:</strong> {movie.Plot}</p>
          <div className="button-container">
            <Link to="/" className="btn">Volver al buscador</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetail;