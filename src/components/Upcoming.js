import UpcomingCard from "./UpcomingCard";

const Upcoming = () => {
  return (
    <div className="text-white my-10 p-10 bg-gradient-to-r from-cyan-600 via-cyan-200 to-rose-200 md:h-screen md:px-32 md:pb-10 ">
      <h1 className="hidden text-3xl md:border-b-white md:border-b-[1px] md:pb-3 md:mb-3 md:inline-block">
        See Upcoming Auctions and Exhibitions
      </h1>
      <div className="w-full h-full md:w-auto md:h-5/6 bg-white">
        <UpcomingCard></UpcomingCard>
      </div>
    </div>
  );
};

export default Upcoming;
