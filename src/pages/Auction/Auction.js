import { useEffect, useState } from "react";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import AuctionCard from "./AuctionCard";
import TopBids from "./TopBids";
import auctionsData from "../../data/AuctionsData";

const Auction = () => {
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
    <div className="auctions container px-5 m-auto">
      <h1 className="text-xl mb-5">
        Here's an overview of products actively on auctions, explore!
      </h1>
      <div className="relative h-72 rounded-xl overflow-hidden md:my-10">
        <div
          id="slide"
          className="slide flex h-72 justify-start overflow-x-scroll overflow-y-hidden scrollbar-hide relative scroll-smooth"
        >
          {auctionsData.products.map((product) => (
            <AuctionCard
              key={product.id}
              url={product.url}
              hr={product.time.hr}
              min={product.time.min}
              sec={product.time.sec}
            ></AuctionCard>
          ))}
        </div>
        <MdOutlineArrowBackIosNew
          onClick={scrollRight}
          size={15}
          className="absolute h-10 w-10 p-3 top-1/2 left-5 -translate-x-0 -translate-y-1/2 z-10 bg-white bg-opacity-30 rounded-full shadow-xl text-white cursor-pointer"
        ></MdOutlineArrowBackIosNew>
        <MdOutlineArrowForwardIos
          onClick={scrollLeft}
          size={15}
          className="absolute h-10 w-10 p-3 top-1/2 right-5 -translate-x-0 -translate-y-1/2 z-10 bg-white bg-opacity-30 text-white rounded-full shadow-xl cursor-pointer"
        ></MdOutlineArrowForwardIos>
      </div>
      <h1 className="text-xl my-5 font-bold">Top bids from popular Creators</h1>

      <TopBids></TopBids>
    </div>
  );
};

export default Auction;
