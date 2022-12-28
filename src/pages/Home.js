import Hero from "../components/Hero";
import Featured from "../components/Featured";
import Upcoming from "../components/Upcoming";
import Links from "../components/Links";
import TopCreators from "../component/TopCreators";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";

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
