import './Header.css';

import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Header() {
  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setShow(true); 
    } else { 
      setShow(false);  
    }

    setLastScrollY(window.scrollY); 
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
       window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <div className="Header">
      <div className={`active ${show && 'hidden'}`}>
        <div className="nav-container">
          <div className="start-container">
            <Link to="/" className="default-text-style">
              KAI CHU
            </Link>
          </div>
          <div className="end-container">
            <div className="end-col">
              <Link to="/work" className="navbar-link">
                GAME PORTFOLIO
              </Link>
            </div>
            <div className="end-col">
              <Link to="/game-portfolio" className="navbar-link">
                WORK
              </Link>
            </div>
            <div>
              <Link to="/" className="navbar-link">
                BIO
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;