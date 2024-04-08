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
          <p>Año: {movie.Year}</p>
          <p>Director: {movie.Director}</p>
          <p>Sinopsis: {movie.Plot}</p>
          <div className="button-container">
            <Link to="/catalog" className="btn">Volver al Catálogo</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetail;