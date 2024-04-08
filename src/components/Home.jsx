import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Bienvenidos al portal de películas</h1>
      <Link to="/catalog" className="catalog-link btn">Mirá el catálogo</Link>
    </div>
  );
};

export default Home;