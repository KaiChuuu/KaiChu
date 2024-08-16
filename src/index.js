import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './GlobalStyles.css';

import Home from './Pages/Home';
import GamePortfolio from './Pages/GamePortfolio';
import WorkPortfolio from './Pages/WorkPortfolio';

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/game-portfolio" element={<GamePortfolio/>} />
          <Route path="/work" element={<WorkPortfolio/>} />
          <Route path="*" element={<Home/>} />
        </Routes>
      </Router>
    </React.StrictMode>
  </div>
);