import './PortfolioRedirects.css';

import { Link } from 'react-router-dom';

function PortfolioRedirects() {
  return (
    <div className="PortfolioRedirects">
      <div className="portfolio-container">
        <div className="portfolio-title section-title">
          LEARN ABOUT ME
        </div>
        <div className="portfolio-links">
          <Link to="/game-portfolio" className="nav-links">
            <div className="game-portfolio-container">
              GAME PORTFOLIO
            </div>
          </Link>
          <Link to="/work" className="nav-links">
            <div className="work-container">
              WORK
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PortfolioRedirects;