import './WorkPortfolio.css';
import { useEffect, useState } from "react";

import Header from "../Components/Header";
import PortfolioRedirects from '../Components/PortfolioRedirects';
import Footer from "../Components/Footer";

function WorkPortfolio() {
  const [workExperience, setWorkExperiences] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('KaiChu/data/workExperiences.json');
        const data = await response.json();
        setWorkExperiences(data);
      } catch (error) {
        console.error('Error fetching Projects JSON data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="WorkPortfolio">
      <Header/>
      
      <div className="workportfolio-container">
        <div className="timeline">
          {workExperience.map((experience, index) => (
            <div index={index}>
              <div className="timeline-spacer"></div>

              <div className="container right">
                <div className="date">{experience.endDate}</div>
                <div className="job-content">
                  <div className="content">
                    <div className="job-container">
                      <div className="job-header">
                        <div className="job-title content-section-title">{experience.companyName}</div>
                        <div className="job-position">{experience.jobRole}</div>
                      </div>
                      <div className="job-duration">{experience.duration}</div>
                    </div>

                    <div className="job-description">
                      {experience.description.map((desc, index2) => (
                        <div index={index2}>
                          <br/>
                          {desc.info}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="company-logo-container">
                    <a alt="" href={experience.companyLink} target="_blank" rel="noopener noreferrer">
                      <img alt="" className="company-logo" src={experience.companyLogo}></img>
                    </a>
                  </div>
                </div>
              </div>
              <div className="container right">
                <div className="date">{experience.startDate}</div>
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

export default WorkPortfolio;