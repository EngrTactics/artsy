import { UpcomingContext } from "../../contexts/UpcomingContext";
import { useContext } from "react";

const UpcomingCard = ({ data }) => {
  const { currentSlide, setCurrentSlide } = useContext(UpcomingContext);
  return (
    <div
      className="featured-img relative h-full w-full bg-gray-600 bg-blend-overlay text-white pt-5 bg-no-repeat bg-cover md:px-10 md:py-16"
      style={{ backgroundImage: `url(${data[currentSlide].url})` }}
    >
      <div className="flex flex-col py-0 px-2 text-sm md:flex-row md:items-end md:h-full md:w-full">
        <div className="flex flex-col items-start md:w-2/3">
          <div className="flex items-baseline space-x-6 ">
            <div className="bg-white w-4 h-4 shrink-0 rounded-full"></div>
            <h1 className="font-stix text-xl text-left mb-3 md:text-3xl md:w-3/4 md:leading-10 md:mb-5">
              {data[currentSlide].title}
            </h1>
          </div>
          <div className="flex space-x-2">
            <h1 className="text-4xl font-stix md:text-6xl">
              {data[currentSlide].id}
            </h1>
            <div className="flex flex-col items-baseline text-[12px] md:text-sm">
              <p className="mb-3 uppercase">{data[currentSlide].date} </p>
              <p>{data[currentSlide].desc}</p>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-5 justify-end md:w-1/3">
          <a href="#" className="underline">
            See More
          </a>
          <button className="border-[1px] rounded-lg p-2">Set Reminder</button>
        </div>
      </div>
    </div>
  );
};

export default UpcomingCard;
