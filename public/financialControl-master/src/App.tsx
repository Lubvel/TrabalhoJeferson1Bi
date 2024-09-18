// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Sobre from './pages/Sobre';
import Login from './pages/Login';
import Navbar from './components/Navbar'; // Importe o Navbar

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Navbar estará sempre presente no topo */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
