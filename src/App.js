import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import MenuPage from './components/pages/menu/MenuPage'; 
import ReservedPage from './components/pages/reservation/ReservedPage';
import InfoPage from './components/pages/info/InfoPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/components/pages/menu" element={<MenuPage />} />           
        <Route path="/components/pages/reservation" element={<ReservedPage />} />           
        <Route path="/components/pages/info" element={<InfoPage />} />           
        </Routes>
      </div>
    </Router>
  );
}

export default App;
