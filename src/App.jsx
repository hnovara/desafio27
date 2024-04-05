import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Catalog from './components/Catalog';
import MovieDetail from './components/MovieDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </Router>
  );
}

export default App;