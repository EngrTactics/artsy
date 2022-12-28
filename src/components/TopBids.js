import TopBid from "./TopBid";

const TopBids = () => {
  return (
    <div className="flex flex-col space-y-5 md:flex-row md:space-x-10 md:space-y-0 md:my-10">
      <TopBid></TopBid>
      <TopBid></TopBid>
    </div>
  );
};

export default TopBids;
