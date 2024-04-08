import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Bienvenidos al portal de películas</h1>
      <Link to="/catalog">Mirá el catálogo</Link>
    </div>
  );
};

export default Home;