import NavBar from "./NavBar";
import Hero from "./Hero";
import Featured from "./Featured";
import Upcoming from "./Upcoming";
import Links from "./Links";
import TopCreators from "./TopCreators";
import NewsLetter from "./NewsLetter";
import Footer from "./Footer";

const Home = () => {
  return (
    <div id="home">
      <Hero></Hero>
      <Featured></Featured>
      <Upcoming></Upcoming>
      <Links></Links>
      <TopCreators></TopCreators>
      <NewsLetter></NewsLetter>
      <Footer></Footer>
    </div>
  );
};

export default Home;
