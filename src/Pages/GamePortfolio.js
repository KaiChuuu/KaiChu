import './GamePortfolio.css';

import Header from "../Components/Header";
import Footer from "../Components/Footer";
import PortfolioRedirects from '../Components/PortfolioRedirects';

function GamePortfolio() {
  return (
    <div className="GamePortfolio">
      <Header/>


      <PortfolioRedirects />
      <Footer/>
    </div>
  );
}

export default GamePortfolio;