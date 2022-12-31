import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

const Slider = ({ data }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const previousSlider = () => {
    const isFirstSlide = currentSlide === 0;
    const newIndex = isFirstSlide ? data.length - 1 : currentSlide - 1;
    setCurrentSlide(newIndex);
  };

  const nextSlider = () => {
    const isLastSlide = currentSlide === data.length - 1;
    const newIndex = isLastSlide ? 0 : currentSlide + 1;
    setCurrentSlide(newIndex);
  };
  return (
    <div className="group w-full h-[400px] p-5 flex-col border-black border-[1px] items-end md:hidden">
      <div className="flex w-full justify-end my-2">
        <FaHeart></FaHeart>
      </div>

      <div
        style={{ backgroundImage: `url(${data[currentSlide].img})` }}
        className="img-container w-full h-[85%] bg-cover bg-center"
      >
        <div className="flex justify-between h-full items-center  ">
          <MdOutlineArrowBackIosNew
            className="hidden w-10 h-10 text-white group-hover:block"
            onClick={() => {
              previousSlider();
            }}
          ></MdOutlineArrowBackIosNew>
          <MdOutlineArrowForwardIos
            className="hidden w-10 h-10 text-white group-hover:block"
            onClick={() => {
              nextSlider();
            }}
          ></MdOutlineArrowForwardIos>
        </div>
      </div>
      <div className="flex mt-5 justify-between mb-5 ">
        <h6 className="uppercase">{data[currentSlide].name}</h6>
        <h6>${data[currentSlide].price}</h6>
      </div>
    </div>
  );
};

export default Slider;
