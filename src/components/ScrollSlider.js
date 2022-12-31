import { useState } from "react";
import { useEffect } from "react";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

const ScrollSlider = ({ children }) => {
  const [slide, setSlide] = useState(null);
  useEffect(() => {
    setSlide(document.getElementById("scroll-slide"));
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
    <div className="relative hidden h-[310px] overflow-hidden md:my-10 md:block">
      <div
        id="scroll-slide"
        className="flex space-x-5 h-[310px] justify-start overflow-x-scroll overflow-y-hidden scrollbar-hide relative scroll-smooth"
      >
        {children}
      </div>
      <MdOutlineArrowBackIosNew
        onClick={scrollRight}
        size={15}
        className={`absolute h-10 w-10 p-3 top-1/2 left-5 -translate-x-0 -translate-y-1/2 z-10 bg-white bg-opacity-30 rounded-full shadow-xl text-white cursor-pointer`}
      ></MdOutlineArrowBackIosNew>
      <MdOutlineArrowForwardIos
        onClick={scrollLeft}
        size={15}
        className={` absolute h-10 w-10 p-3 top-1/2 right-5 -translate-x-0 -translate-y-1/2 z-10 bg-white bg-opacity-30 text-white rounded-full shadow-xl cursor-pointer`}
      ></MdOutlineArrowForwardIos>
    </div>
  );
};

export default ScrollSlider;
