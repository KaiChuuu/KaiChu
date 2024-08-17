import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './GlobalStyles.css';

import Home from './Pages/Home';
import GamePortfolio from './Pages/GamePortfolio';
import WorkPortfolio from './Pages/WorkPortfolio';
import ScrollToTop from './Components/ScrollToTop';

import {BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Suspense fallback={<div/>}>
      <React.StrictMode>
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/game-portfolio" element={<GamePortfolio/>} />
            <Route path="/work" element={<WorkPortfolio/>} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Router>
      </React.StrictMode>
    </Suspense>
  </div>
);