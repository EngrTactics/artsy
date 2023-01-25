import UpcomingCard from "./UpcomingCard";
import UpcomingData from "../../data/UpcomingData";
import { UpcomingContext } from "../../contexts/UpcomingContext";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { useState } from "react";

const Upcoming = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const context = {
    currentSlide,
    setCurrentSlide,
  };

  const previousSlider = () => {
    const isFirstSlide = currentSlide === 0;
    const newIndex = isFirstSlide ? UpcomingData.length - 1 : currentSlide - 1;
    setCurrentSlide(newIndex);
  };

  const nextSlider = () => {
    const isLastSlide = currentSlide === UpcomingData.length - 1;
    const newIndex = isLastSlide ? 0 : currentSlide + 1;
    setCurrentSlide(newIndex);
  };
  return (
    <div className="relative flex flex-col items-end text-white my-10 p-10 bg-gradient-to-r from-cyan-600 via-cyan-200 to-rose-200 md:h-screen w-full md:px-32 md:pb-10 space-y-3">
      <h1 className="hidden text-3xl w-full md:border-b-white md:border-b-[1px] md:pb-3 md:mb-3 md:inline-block">
        See Upcoming Auctions and Exhibitions
      </h1>
      <div className="h-full md:w-auto md:h-5/6 bg-white">
        <UpcomingContext.Provider value={context}>
          <UpcomingCard data={UpcomingData}></UpcomingCard>
        </UpcomingContext.Provider>
      </div>
      <div className="flex space-x-5 w-auto">
        <MdOutlineArrowBackIosNew
          size={25}
          className="h-12 w-12 p-3 bg-white bg-opacity-30 rounded-full shadow-xl text-white cursor-pointer"
          onClick={previousSlider}
        ></MdOutlineArrowBackIosNew>
        <MdOutlineArrowForwardIos
          size={25}
          className=" h-12 w-12 p-3  bg-white bg-opacity-30 text-white rounded-full shadow-xl cursor-pointer"
          onClick={nextSlider}
        ></MdOutlineArrowForwardIos>
      </div>
    </div>
  );
};

export default Upcoming;
