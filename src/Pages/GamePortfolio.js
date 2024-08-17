import './GamePortfolio.css';
import { useEffect, useState } from "react";

import Header from "../Components/Header";
import Footer from "../Components/Footer";
import PortfolioRedirects from '../Components/PortfolioRedirects';

function GamePortfolio() {
  const currentYear = new Date().getFullYear();
  const yearsPassed = currentYear - 2020;

  const [gamePortfolio, setGamePortfolio] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data/gamePortfolio.json');
        const data = await response.json();
        setGamePortfolio(data);
      } catch (error) {
        console.error('Error fetching Projects JSON data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="GamePortfolio">
      <Header/>
    
      <div className="gameportfolio-intro">
        <div className="intro-container"> 
          <div className="gameportfolio-title">
            MY PASSION
          </div>
          <div className="gameportfolio-desc">
            I have been developing games for over <b>{yearsPassed} {yearsPassed === 1 ? "year" : "years"}</b>!
          </div>
          <div className="gameportfolio-desc">
            The gaming industry is a boundless realm of discovery, where I find joy in exploring new ideas and pushing the limits of creativity. Each project is a sandbox of infinite possibilities, where imagination knows no bounds.
          </div>
          <div className="gameportfolio-desc">
            I am driven to create even more expansive games, surpassing the visions of my past and conjuring experiences beyond my wildest dreams.
          </div>
        </div>  
      </div>

      <div className="gameportfolio-container">
        <div className="timeline">
          {gamePortfolio.map((project, index) => (
            <div index={index}>
              <div className="timeline-spacer"></div>

              <div className="container right">
                <div className="date">{project.endDate}</div>
                <div className="project-content">
                  <div className="content">
                    <div className="project-container">
                      <div className="project-header">
                        <div className="project-title content-section-title">{project.gameName}</div>
                        <div className="project-position">{project.gameResources}</div>
                      </div>
                      <div className="project-duration">{project.duration}</div>
                    </div>

                    <div className="project-description">
                      {project.description.map((desc, index2) => (
                        <div index={index2}>
                          <br/>
                          {desc.info}
                        </div>
                      ))}
                    </div>

                    <div className="project-links">
                      {project.githubLink ? (
                        <a alt="" className="project-link-col game-ref-links"href={project.githubLink} target="_blank" rel="noopener noreferrer">
                          GitHub
                        </a>
                      ): (<></>)}
                      {project.itchioLink ? (
                        <a alt="" className="game-ref-links" href={project.itchioLink} target="_blank" rel="noopener noreferrer">
                          Itch.io
                        </a>
                      ): (<></>)}
                    </div>
                  </div>
                  
                  <div className="project-logo-container">
                    <a alt="" href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <img alt="" className="project-logo" style={{minWidth: project.imageMinWidth}} src={project.gameImg}></img>
                    </a>
                  </div>
                </div>
              </div>
              <div className="container right">
                <div className="date">{project.startDate}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <PortfolioRedirects />
      <Footer/>
    </div>
  );
}

export default GamePortfolio;