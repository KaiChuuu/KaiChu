import './Home.css';
import { useEffect, useState } from "react";

import Header from "../Components/Header";
import haloBg from "../Assets/halo-bg.jpg";
import kaiImg from "../Assets/kai-image.jpg";
import Footer from "../Components/Footer";
import PortfolioRedirects from "../Components/PortfolioRedirects";
import TypingEffect from '../Components/TypingEffect';

import githubLogo from "../Assets/Icons/github-logo.png";
import itchioLogo from "../Assets/Icons/itchio-logo.png";
import linkedinLogo from "../Assets/Icons/linkedin-logo.png";

function Home() {
  const [certifications, setCertifications] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data/certifications.json');
        const data = await response.json();
        setCertifications(data);
      } catch (error) {
        console.error('Error fetching Projects JSON data:', error);
      }
    };

    fetchData();
  }, []);

  const textItems = ['Full-stack Developer.', 'Game Developer.', 'Software Engineer.', 'Web Developer.'];

  return (
    <div className="Home">

      <Header />
      <div className="home-image-container">
        <div className="home-title">
          <div>Hi, I'm Kai Chu.</div>
          <div className="home-title-dynamic">
            <div>I'm a&nbsp;</div>
            <div className="dynamic-role">
              <TypingEffect texts={textItems} typingSpeed={100} pauseTime={3250} />
            </div>
          </div>
        </div>
        <div className="scroll-text">SCROLL DOWN</div>
        <div className="icon-container">
          <a href="https://github.com/KaiChuuu" alt="" target="_blank" rel="noopener noreferrer"><img alt="" className="logo-img logo-spacer logo-animation" src={githubLogo}></img></a>  
          <a href="https://happyteam.itch.io/" alt="" target="_blank" rel="noopener noreferrer"><img alt="" className="itchio-logo logo-spacer logo-animation" src={itchioLogo}></img></a>
          <a href="https://www.linkedin.com/in/kai-chu-b482541b0/" alt="" target="_blank" rel="noopener noreferrer"><img alt="" className="linkedin-logo logo-img logo-animation" src={linkedinLogo}></img></a>
        </div>
        <img src={haloBg} alt="halo-bg" className="halo-image" />
      </div>

      <div className="info-container">
        <div className="info-text-container">
          Hi my name is Kai Chu.<br/><br/>
          I graduated from SFU with a degree in Computer Science, specializing in Software Systems.<br/><br/>
          I've gained experience and studied across various areas within the computer science industry.<br/><br/>
          I have a passion for learning and constantly pushing myself to grow as a developer. There's still so much to explore, and I'm excited about the challenges and opportunities ahead!
        </div>
        <div className="info-image">
          <img className="kai-img" alt="" src={kaiImg}></img>
        </div>
      </div>

      <div className="certification-container">
        <div className="certification-header">
          <div className="certification-header-bg">
            <div className="certification-title section-title">
              CERTIFICATIONS
            </div>
          </div>
          <div className="certification-link">
            <a alt="" className="link-style" href="https://www.credly.com/users/kai-chu.621a5fe3" target="_blank" rel="noopener noreferrer">Credly Profile</a>
          </div>
        </div>
        <div className="certification-body">
          {certifications.map((certification, index) => (
            <div key={index}>
              <a alt="" target="_blank" rel="noopener noreferrer" href={certification.link}>
                <div className="certification-block">
                  <div className="certification-block-img">
                    <img className="certification-img" alt="" src={certification.image}></img>
                  </div>
                  <div className="certification-block-title">
                    {certification.name}
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>

      <PortfolioRedirects />

      <Footer />
    </div>
  );
}

export default Home;