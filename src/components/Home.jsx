import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="home-container">
      <h1>Bienvenidos al buscador de películas</h1>
      <div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Busca tu película.."
        />
        <Link to={`/catalog?search=${searchTerm}`} className="btn">Buscar</Link>
      </div>
    </div>
  );
};

export default Home;