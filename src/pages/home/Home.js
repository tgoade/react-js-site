
import Navbar from "../../components/nav/NavBar";
import "../../components/nav/NavBar.css";
import HeroSection from "../../components/hero/HeroSection";
import "../../App.css";
import SmallCards from "../../components/cards/SmallCards";
import "../../components/cards/SmallCards.css";
import MediumCards from "../../components/cards/MediumCards";



const Home = () => {
  return (
    <>
      <Navbar navColor="text--white" navBorder="nav--noborder" />
      <HeroSection />
      <SmallCards />
      <MediumCards />
    </>
  );
}

export default Home;
