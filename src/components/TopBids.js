import TopBid from "./TopBid";
import auctionsData from "../data/AuctionsData";

const TopBids = () => {
  return (
    <div className="flex flex-col space-y-5 md:flex-row md:space-x-10 md:space-y-0 md:my-10">
      {auctionsData.bids.map((bid) => (
        <TopBid
          key={bid.id}
          url={bid.url}
          creator={bid.creator}
          name={bid.name}
          highest={bid.bid.highest.eth}
          current={bid.bid.current.eth}
          day={bid.date.day}
          month={bid.date.month}
          year={bid.date.year}
        ></TopBid>
      ))}
    </div>
  );
};

export default TopBids;
