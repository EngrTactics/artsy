import { useEffect, useState } from "react";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import Auction from "./Auction";
import TopBids from "./TopBids";

const Auctions = () => {
  const [slide, setSlide] = useState(null);
  useEffect(() => {
    setSlide(document.getElementById("slide"));
  }, []);

  const scrollRight = () => {
    slide.scrollBy({
      left: -200,
    });
  };
  const scrollLeft = () => {
    slide.scrollBy({
      left: 200,
    });
  };
  return (
    <div className="auctions container px-5">
      <h1 className="text-xl mb-5">
        Here's an overview of products actively on auctions, explore!
      </h1>
      <div className="relative h-52 rounded-xl overflow-hidden">
        <div
          id="slide"
          className="slide flex h-52 justify-start overflow-x-scroll overflow-y-hidden scrollbar-hide relative scroll-smooth"
        >
          <Auction></Auction>
          <Auction></Auction>
          <Auction></Auction>
          <Auction></Auction>
          <Auction></Auction>
          <Auction></Auction>
        </div>
        <MdOutlineArrowBackIosNew
          onClick={scrollRight}
          size={15}
          className="absolute p-3 top-1/2 left-5 -translate-x-0 -translate-y-1/2 z-10 bg-white bg-opacity-30 rounded-full shadow-lg text-white "
        ></MdOutlineArrowBackIosNew>
        <MdOutlineArrowForwardIos
          onClick={scrollLeft}
          size={15}
          className="absolute p-3 top-1/2 right-5 -translate-x-0 -translate-y-1/2 z-10 bg-white bg-opacity-30 text-white rounded-full shadow-xl"
        ></MdOutlineArrowForwardIos>
      </div>
      <h1 className="text-xl my-5">Top bids from popular Creators</h1>

      <TopBids></TopBids>
    </div>
  );
};

export default Auctions;
